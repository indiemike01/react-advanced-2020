import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Random text");
  const handleClick = () => {
    setTitle("Not random anymore!");
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Press to change
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
