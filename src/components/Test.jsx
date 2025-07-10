import React from "react";
import Test2 from "./Test2";

export default function Test({ name }) {
  return (
    <div>
      <h1>this is Test1 component</h1>
      <Test2 test={name} />
    </div>
  );
}
// This component is used to demonstrate passing data from one component to another.
// It receives a prop `name` and renders it in a child component `Test2`.
