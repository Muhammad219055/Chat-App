import React, { useState } from "react";
import Send from "../assets/Send";

const InputFeild = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const input = e.target.value;
    setInputValue(input);
  };
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    onSend(inputValue);
    setInputValue("");
  };
  const handleKeyDown =(event)=>{
    if(event.key === 'Enter'){
        handleSendMessage()
    }
  }
  return (
    <div className="input-field-send-button">
      <input
        type="text"
        placeholder="Hello,John!..."
        value={inputValue}
        onChange={handleInput}
        className="msg-input-field"
        onKeyDown={handleKeyDown}
      />
      <button className="send-button" onClick={handleSendMessage}>
        <Send />
      </button>
    </div>
  );
};

export default InputFeild;
