// // src/components/Receiver.js
// import React, { useEffect, useState } from "react";
// import Socket from "../Socket";

// export const Receiver = () => {
//   const [messages, setMessages] = useState([]);
//   console.log("7412863", messages);

//   useEffect(() => {
//     const handleReceivedMessage = (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     };

//     // Must match the event emitted from the server
//     Socket.on("receiveMessage", handleReceivedMessage);

//     // Clean up on unmount
//     return () => {
//       Socket.off("receiveMessage", handleReceivedMessage);
//     };
//   }, []);

//   return (
//     <div>
//       <h3>Received Messages</h3>
//       <ul>
//         {messages.map((msg, index) => {
//           console.log("SFgfsdgdf",msg);
          
//           return <li key={index}>{msg}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// src/components/Chat.js
import React, { useEffect, useState } from "react";
import Socket from "../Socket";

export const Receiver = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleReceivedMessage = (msg) => {
      setMessages((prev) => [...prev, { type: "received", text: msg }]);
    };

    Socket.on("receiveMessage", handleReceivedMessage);

    return () => {
      Socket.off("receiveMessage", handleReceivedMessage);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      // Send message to server
      Socket.emit("sendMessage", input);

      // Add to local state as sent
      setMessages((prev) => [...prev, { type: "sent", text: input }]);
      setInput("");
    }
  };

  return (
    <div>
      <h3>Chat</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index} style={{ color: msg.type === "sent" ? "green" : "blue" }}>
            {msg.type === "sent" ? "Me: " : "Them: "}
            {msg.text}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
