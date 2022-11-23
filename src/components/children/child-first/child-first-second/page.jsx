import React, { useContext } from "react";
import MessageContext from "../../../../context/message.context";
const SecondOfFirstChild = () => {
  const { setMessage } = useContext(MessageContext);

  const changeMessage = () => {
    setMessage("Changed by Child 1.2");
  };
  return (
    <div className="grand-child__container" onClick={changeMessage}>
      Child 1.2
    </div>
  );
};
export default SecondOfFirstChild;
