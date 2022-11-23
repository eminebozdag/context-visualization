import React from "react";
import FirstChild from "../children/child-first/page";
import SecondChild from "../children/child-second/page";
import "./page.css";
const Parent = () => {
  return (
    <div className="children-container">
      <FirstChild />
      <SecondChild />
    </div>
  );
};
export default Parent;
