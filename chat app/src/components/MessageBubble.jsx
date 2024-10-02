const MessageBubble = ({ content, sent, type }) => {
  const date = new Date();
  const timeStamp = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={sent ? "message-bubble" : "received-message"}>
      {type === "text" ? (
        <p className="message-content">{content}</p>
      ) : (
        <div className="attachment-content">
          {content.type.startsWith("image/") ? (
            <a href={content.file} download>
              <img
                src={content.file}
                alt="attachment"
                className="attachment-thumbnail"
              />
            </a>
          ) : content.type.startsWith("video/") ? (
            <a href={content.file} download>
              <video controls className="attachment-thumbnail">
                <source src={content.file} type={content.type} />
              </video>
            </a>
          ) : null}
        </div>
      )}
      <p className="message-time-stamp">{timeStamp}</p>
    </div>
  );
};

export default MessageBubble;
