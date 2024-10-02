import React, { useState } from "react";
import Send from "../assets/Send";
import Attachment from "../assets/attach-2-outline";

const InputFeild = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleInput = (e) => {
    const input = e.target.value;
    setInputValue(input);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file); // Create a URL for the file
      setAttachment({ file: fileURL, type: file.type }); // Store the file and its type
      onSend({ file: fileURL, type: file.type }, "attachment"); // Call onSend with the attachment
      setAttachment(null); // Reset attachment
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    onSend(inputValue, "text"); // Call onSend with text
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="input-field-send-button">
      <input
        type="text"
        placeholder="Hello, John!... "
        value={inputValue}
        onChange={handleInput}
        className="msg-input-field"
        onKeyDown={handleKeyDown}
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="attachment-button"
        id="file-att"
        name="file-att"
        style={{ display: "none" }}
      />
      <label className="attachment-button" htmlFor="file-att">
        <Attachment />
      </label>
      <button className="send-button" onClick={handleSendMessage}>
        <Send />
      </button>
    </div>
  );
};

export default InputFeild;
