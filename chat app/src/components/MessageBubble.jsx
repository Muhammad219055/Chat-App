const MessageBubble = ({ content, sent }) => {
  const date = new Date();
  const timeStamp = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={sent ? "message-bubble" : "received-message"}>
      <p className="message-content">{content}</p>
      <p className="message-time-stamp">{timeStamp}</p>
    </div>
  );
};

export default MessageBubble;
