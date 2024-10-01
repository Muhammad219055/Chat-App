import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import InputFeild from "./InputFeild";
import MessageList from "./MessageList";

const socket = io("http://localhost:4000");

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, { content: message, sent: false }]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const handleSendMessage = (message) => {
    setMessages((prev) => [...prev, { content: message, sent: true }]);
    socket.emit("sendMessage", message);
  };

  return (
    <div className="chat-screen">
      <MessageList messages={messages} />
      <InputFeild onSend={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
