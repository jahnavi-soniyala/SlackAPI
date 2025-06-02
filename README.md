# 📦 Slack API Assignment

A simple Node.js and Express application to interact with the Slack API. This application allows users to send, schedule, edit, delete, and fetch messages from a specified Slack channel using RESTful endpoints.

---

## 🚀 Features

* ✅ Send messages to a Slack channel
* ⏰ Schedule messages with a specific timestamp
* ✏️ Edit previously sent messages
* ❌ Delete messages from the channel
* 📜 Retrieve message history

---

## 🧰 Tech Stack

* **Node.js**
* **Express.js**
* **Axios**
* **dotenv**
* **Slack Web API**

---

## 📁 Project Structure

```
SlackAPI/
├── index.js
├── .env
├── package.json
├── package-lock.json
├── LICENSE
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/jahnavi-soniyala/SlackAPI.git
cd SlackAPI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```
SLACK_TOKEN=xoxb-Your-Slack-Bot-Token
SLACK_CHANNEL_ID=YourSlackChannelID
```

> Make sure your Slack app has `chat:write`, `chat:write.public`, and `channels:history` scopes enabled.

### 4. Start the server

```bash
node index.js
```

> Server runs on `http://localhost:3000`

---

## 🧪 API Endpoints

### 🔹 Send a message

`POST /send`

```json
{
  "text": "Hello from Node.js!"
}
```

---

### 🔹 Schedule a message

`POST /schedule`

```json
{
  "text": "Scheduled message",
  "postAt": 1717350000
}
```

> `postAt` is a UNIX timestamp (e.g., `Math.floor(Date.now() / 1000) + 60` for 1 min from now)

---

### 🔹 Edit a message

`POST /edit`

```json
{
  "ts": "message_timestamp",
  "text": "Updated message text"
}
```

---

### 🔹 Delete a message

`POST /delete`

```json
{
  "ts": "message_timestamp"
}
```

---

### 🔹 Get message history

`GET /history`

> Fetches recent messages from the configured Slack channel.

---

## 📝 License

This project is licensed under the [The Unlicense](LICENSE).

---

## 👩‍💼 Author

**Jahnavi Sonayala**
GitHub: [@Jahnavi sonayala](https://github.com/jahnavi-soniyala)</br>
LinkedIn: [@Jahnavi sonayala](https://linkedin.com/in/jahnavi-sonayala)
