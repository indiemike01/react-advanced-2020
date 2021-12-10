import React from "react";
import { Fragment } from "react";

const ErrorExample = () => {
  let title = "Indie Mike";
  const handleClick = () => {
    title = "Mihai";
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Button
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
