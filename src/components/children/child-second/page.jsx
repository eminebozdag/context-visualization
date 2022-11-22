import React from "react";
import FirstOfSecondChild from "./child-second-first/page";
import SecondOfSecondChild from "./child-second-second/page";
import "./page.css";
const SecondChild = () => {
  return (
    <div className="secondchild-container">
      <FirstOfSecondChild />
      <SecondOfSecondChild />
    </div>
  );
};
export default SecondChild;
