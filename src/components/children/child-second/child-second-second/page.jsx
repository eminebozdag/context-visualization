import React, { useContext } from "react";
import MessageContext from "../../../../context/message.context";

const SecondOfSecondChild = () => {
  const context = useContext(MessageContext);

  const handleOnClick = () => {
    if (!context || !context.setMessage) {
      alert("Since Child 2.2 is out of Provider can't change message! ");
      return;
    }

    context.setMessage(
      "this block only run when child 2.2 consuming the context."
    );
  };

  return (
    <div className="grand-child__container" onClick={handleOnClick}>
      Child 2.2
    </div>
  );
};
export default SecondOfSecondChild;
