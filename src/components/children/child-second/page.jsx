import React, { useContext } from "react";
import MessageContext from "../../../context/message.context";
import FirstOfSecondChild from "./child-second-first/page";
import SecondOfSecondChild from "./child-second-second/page";

const SecondChild = () => {
  const context = useContext(MessageContext);

  const handleOnClick = () => {
    if (!context || !context.setMessage) {
      alert("Since Child 2 is out of Provider can't change message! ");
      return;
    }

    context.setMessage(
      "this block only run when child 2.2 consuming the context."
    );
  };

  return (
    <div className="container">
      <h1 onClick={handleOnClick}>Child 2</h1>
      <div className="child-container">
        <FirstOfSecondChild />
        <SecondOfSecondChild />
      </div>
    </div>
  );
};
export default SecondChild;
