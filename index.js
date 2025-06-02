require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const SLACK_TOKEN = process.env.SLACK_TOKEN;
const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID;
const headers = {
  Authorization: `Bearer ${SLACK_TOKEN}`,
  "Content-Type": "application/json",
};

//send a message
app.post("/send", async (req, res) => {
  try {
    const { text } = req.body;
    const response = await axios.post(
      "https://slack.com/api/chat.postMessage",
      {
        channel: SLACK_CHANNEL_ID,
        text,
      },
      { headers }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//schedule a message
app.post("/schedule", async (req, res) => {
  try {
    const { text, postAt } = req.body; // postAt in UNIX timestamp
    const response = await axios.post(
      "https://slack.com/api/chat.scheduleMessage",
      {
        channel: SLACK_CHANNEL_ID,
        text,
        post_at: postAt,
      },
      { headers }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//retrieve messages
app.get("/history", async (req, res) => {
  try {
    const response = await axios.get(
      `https://slack.com/api/conversations.history?channel=${SLACK_CHANNEL_ID}`,
      { headers }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//edit a message
app.post("/edit", async (req, res) => {
  try {
    const { ts, text } = req.body;
    const response = await axios.post(
      "https://slack.com/api/chat.update",
      {
        channel: SLACK_CHANNEL_ID,
        ts,
        text,
      },
      { headers }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//delete a message
app.post("/delete", async (req, res) => {
  try {
    const { ts } = req.body;
    const response = await axios.post(
      "https://slack.com/api/chat.delete",
      {
        channel: SLACK_CHANNEL_ID,
        ts,
      },
      { headers }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("slack api application running on port 3000");
});