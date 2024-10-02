import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import InputFeild from "./InputFeild";
import MessageList from "./MessageList";
import Login from "./Login";

const socket = io("http://localhost:4000");

const ChatApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [
        ...prev,
        { content: message.content, sent: false, type: message.type },
      ]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const handleSendMessage = (message, type) => {
    const newMessage = { content: message, sent: true, type };
    setMessages((prev) => [...prev, newMessage]);
    socket.emit("sendMessage", newMessage);
  };

  return (
    <div className="chat-screen">
      <MessageList messages={messages} />
      <InputFeild onSend={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
