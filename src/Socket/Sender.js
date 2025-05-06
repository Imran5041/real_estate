// src/components/Sender.js
import React, { useState } from "react";
import Socket from "../Socket";

function Sender() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      Socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Send Message</h2>
      <input 
        type="text"
        value={message}
        placeholder="Type message..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default Sender;
