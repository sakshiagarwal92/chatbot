import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <strong>User:</strong> {message.message}
    </div>
  );
};

export default Message;
