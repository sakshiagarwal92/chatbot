import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api"; // Django backend URL

// Send a message
export const sendMessage = async (userId, message) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/send-message/`,
      {
        user_id: userId,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

// Get messages
export const getMessages = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-messages/`, {
      params: { user_id: userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
