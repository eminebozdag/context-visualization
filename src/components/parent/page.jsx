import React, { useState } from "react";
import MessageContext from "../../context/message.context";
import FirstChild from "../children/child-first/page";
import SecondChild from "../children/child-second/page";
import "./page.css";

const Parent = () => {
  const [message, setMessage] = useState("Default message by Parent Node");

  const handleOnClick = () => {
    setMessage("Default message by Parent Node");
  };

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>Parent</h1>
      <p>
        current message: <span>{message}</span>
      </p>
      <div className="children-container">
        <MessageContext.Provider value={{ setMessage }}>
          <FirstChild />
        </MessageContext.Provider>
        <SecondChild />
      </div>
    </div>
  );
};
export default Parent;
