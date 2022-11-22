import React from "react";
import FirstOfFirstChild from "./child-first-first/page";
import SecondOfFirstChild from "./child-first-second/page";
import "./page.css";

const FirstChild = () => {
  return (
    <div className="firstchild-container">
      <FirstOfFirstChild />
      <SecondOfFirstChild />
    </div>
  );
};
export default FirstChild;
