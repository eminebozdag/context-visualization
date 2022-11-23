import React, { useContext } from "react";
import MessageContext from "../../../context/message.context";
import FirstOfFirstChild from "./child-first-first/page";
import SecondOfFirstChild from "./child-first-second/page";
const FirstChild = () => {
  const { setMessage } = useContext(MessageContext);

  const handleOnClick = () => {
    setMessage("Changed by Child 1");
  };

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>Child 1</h1>
      <div className="child-container">
        <FirstOfFirstChild />
        <SecondOfFirstChild />
      </div>
    </div>
  );
};
export default FirstChild;
