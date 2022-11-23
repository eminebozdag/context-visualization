import React, { useContext } from "react";
import MessageContext from "../../../../context/message.context";
const FirstOfFirstChild = () => {
  const { setMessage } = useContext(MessageContext);

  const changeMessage = () => {
    setMessage("Changed by Child 1.1");
  };

  return (
    <div className="grand-child__container" onClick={changeMessage}>
      Child 1.1
    </div>
  );
};
export default FirstOfFirstChild;
