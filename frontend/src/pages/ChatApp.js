import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const userId = 1; // Static user ID (for simplicity)

    useEffect(() => {
        // Fetch messages on component load
        axios.get(`http://127.0.0.1:8000/api/get-messages/${userId}/`)
            .then(response => setMessages(response.data))
            .catch(error => console.error(error));
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            axios.post("http://127.0.0.1:8000/api/send-message/", { user_id: userId, message: input })
                .then(response => {
                    setMessages([
                        ...messages,
                        { sender: "user", message: input },
                        { sender: "bot", message: response.data.response }
                    ]);
                    setInput("");
                })
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="chat-app">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === "user" ? "user-message" : "bot-message"}>
                        {msg.message}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatApp;
