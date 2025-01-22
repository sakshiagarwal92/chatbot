import React, { useState, useEffect } from "react";
import { sendMessage, getMessages } from "../api/api";

const Chat = () => {
  const [userId] = useState(1); // Hardcoded user ID (replace with dynamic ID if needed)
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch messages when the component loads
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages(userId);
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [userId]);

  // Handle sending a message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
  
    try {
      // Append the user's message
      setMessages([
        ...messages,
        { sender: "user", message }, // Add user's message
      ]);
  
      // Send message and append bot's response
      const data = await sendMessage(userId, message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", message: data.response }, // Add bot's response
      ]);
  
      setMessage(""); // Clear the input field
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  

  return (
    <div>
      <h1>Chatbot</h1>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender === "user" ? "User" : "Bot"}:</strong> {msg.message}
      </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
