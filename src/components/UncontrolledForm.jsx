import React, { useRef } from "react";

export default function UncontrolledForm() {
  const inputReF = useRef(); // to controlled the input
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputReF.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="type something" ref={inputReF} />
        <button type="submit">Submit </button>
      </form>
    </div>
  );
}
