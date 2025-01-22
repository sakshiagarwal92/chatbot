# Chatbot Application

This is a simple chatbot application built using Django for the backend and React for the frontend. It supports sending and receiving messages between a user and a bot.

---

## Features

- **Backend**: Django-based REST API for managing messages.
  - `POST /api/send-message/`: Send a message to the bot.
  - `GET /api/get-messages/?user_id=<id>`: Fetch the message history for a user.

- **Frontend**: React-based interface for interacting with the chatbot.

---

## Prerequisites

- **Backend**:
  - Python 3.10 or higher
  - Django 5.x or higher
  - A virtual environment (optional but recommended)

- **Frontend**:
  - Node.js 16 or higher
  - npm or yarn

---

1. Backend (Django)

Clone the repository

git clone <repository-url>
cd chatbot_backend


Create a virtual environment

python3 -m venv .chatbot
source .chatbot/bin/activate   # For Linux/MacOS
.chatbot\Scripts\activate      # For Windows

Install dependencies
pip install -r requirements.txt

Apply migrations
python manage.py makemigrations
python manage.py migrate

Run the development server
python manage.py runserver
The backend will start at http://127.0.0.1:8000.

2. Frontend (React)
Navigate to the frontend directory

cd chatbot_frontend
Install dependencies

npm install
Start the React development server

npm start
The frontend will start at http://localhost:3000.

API Endpoints
1. POST /api/send-message/
Description: Send a message to the bot.

Request Body:

{
  "user_id": 1,
  "message": "Hello, bot!"
}
Response:

{
  "response": "I'm a bot. How can I help you?"
}

curl -X POST "http://127.0.0.1:8000/api/send-message/" \
-H "Content-Type: application/json" \
-d '{"user_id": 1, "sender": "user", "message": "How are you, bot?"}'

{"response": "I'm a bot. How can I help you?"}%

2. GET /api/get-messages/?user_id=<id>
Description: Fetch message history for a user.

Response:
[
  {
    "id": 1,
    "user_id": 1,
    "sender": "user",
    "message": "Hello, bot!",
    "timestamp": "2025-01-21T17:00:00Z"
  },
  {
    "id": 2,
    "user_id": 1,
    "sender": "bot",
    "message": "I'm a bot. How can I help you?",
    "timestamp": "2025-01-21T17:00:01Z"
  }
]

curl "http://127.0.0.1:8000/api/get-messages/?user_id=1"

[{"id": 1, "user_id": 1, "sender": "user", "message": "Hello, bot!", "timestamp": "2025-01-20T17:04:08.155Z"}, {"id": 2, "user_id": 1, "sender": "bot", "message": "I\u2019m a bot. How can I help you?", "timestamp": "2025-01-20T17:04:08.161Z"}, {"id": 3, "user_id": 1, "sender": "user", "message": "Hello, bot!", "timestamp": "2025-01-20T17:04:52.799Z"}, {"id": 4, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-20T17:04:52.805Z"}, {"id": 5, "user_id": 1, "sender": "user", "message": "Hello, bot!", "timestamp": "2025-01-20T17:05:07.726Z"}, {"id": 6, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-20T17:05:07.730Z"}, {"id": 7, "user_id": 1, "sender": "user", "message": "How are you, bot?", "timestamp": "2025-01-21T06:03:40.815Z"}, {"id": 8, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-21T06:03:40.821Z"}, {"id": 9, "user_id": 1, "sender": "user", "message": "hi", "timestamp": "2025-01-21T06:33:43.082Z"}, {"id": 10, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-21T06:33:43.089Z"}, {"id": 11, "user_id": 1, "sender": "user", "message": "hi", "timestamp": "2025-01-21T06:33:56.548Z"}, {"id": 12, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-21T06:33:56.551Z"}, {"id": 13, "user_id": 1, "sender": "user", "message": "How are you, bot?", "timestamp": "2025-01-21T06:34:18.994Z"}, {"id": 14, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-21T06:34:18.998Z"}, {"id": 15, "user_id": 1, "sender": "user", "message": "hi", "timestamp": "2025-01-21T06:34:24.278Z"}, {"id": 16, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-21T06:34:24.281Z"}, {"id": 17, "user_id": 1, "sender": "user", "message": "sa", "timestamp": "2025-01-22T05:31:32.090Z"}, {"id": 18, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:31:32.109Z"}, {"id": 19, "user_id": 1, "sender": "user", "message": "as", "timestamp": "2025-01-22T05:31:33.243Z"}, {"id": 20, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:31:33.245Z"}, {"id": 21, "user_id": 1, "sender": "user", "message": "asdasd", "timestamp": "2025-01-22T05:31:34.349Z"}, {"id": 22, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:31:34.352Z"}, {"id": 23, "user_id": 1, "sender": "user", "message": "asd", "timestamp": "2025-01-22T05:31:35.572Z"}, {"id": 24, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:31:35.591Z"}, {"id": 25, "user_id": 1, "sender": "user", "message": "adsdsa", "timestamp": "2025-01-22T05:31:38.135Z"}, {"id": 26, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:31:38.138Z"}, {"id": 27, "user_id": 1, "sender": "user", "message": "How are you, bot?", "timestamp": "2025-01-22T05:31:46.891Z"}, {"id": 28, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:31:46.893Z"}, {"id": 29, "user_id": 1, "sender": "user", "message": "How are you, bot?", "timestamp": "2025-01-22T05:44:22.948Z"}, {"id": 30, "user_id": 1, "sender": "bot", "message": "I'm a bot. How can I help you?", "timestamp": "2025-01-22T05:44:22.956Z"}]%

Project Structure
Backend (chatbot_backend/)
chatbot/: Contains the core application logic.
chatbot/models.py: Database models for users and messages.
chatbot/views.py: API endpoints for sending and retrieving messages.
chatbot/urls.py: URL routing for the backend.
Frontend (chatbot_frontend/)
src/: Contains the React frontend code.
src/components/Chat.js: Main chat component.
src/api/api.js: Handles API calls to the backend.
