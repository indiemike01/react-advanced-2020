import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = () => {
    e.preventDefault();
    // refContainer.current.value;
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer} />
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UseRefBasics;
