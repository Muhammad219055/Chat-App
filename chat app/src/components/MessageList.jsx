import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

const MessageList = ({ messages }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages-screen">
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          content={message.content}
          sent={message.sent}
          type={message.type}
        />
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
