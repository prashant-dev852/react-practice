import React from "react";

export default function Test2({ test }) {
  return (
    <div>
      <h1>Test2 Component : {test}</h1>
      <p>This is a simple test component.</p>
    </div>
  );
}
// This component is used to demonstrate passing data from one component to another.
// It receives a prop `test` and renders it in a child component.
