import React from "react";
import FirstOfFirstChild from "./child-first-first/page";
import SecondOfFirstChild from "./child-first-second/page";

const FirstChild = () => {
  return (
    <div className="container">
      <h1>Child 1</h1>
      <div className="child-container">
        <FirstOfFirstChild />
        <SecondOfFirstChild />
      </div>
    </div>
  );
};
export default FirstChild;
