import React from "react";
import { useContext } from "react";
import { Testcontext } from "../App"; // import the context created in App.js

export default function Test2({ test }) {
  // consume the context created in App.js
  const userData = useContext(Testcontext);

  return (
    <div>
      <h1>Test2 Component via props drilling: {test}</h1>
      <p>This is a simple test component.</p>
      <p>User data received from the context : {userData.name}</p>
    </div>
  );
}
// This component is used to demonstrate passing data from one component to another.
// It receives a prop `test` and renders it in a child component.

//what is difference between useContext and props drilling?
// useContext allows you to access the context value directly without passing it through every component
// in the tree.
// Props drilling is the process of passing data through multiple layers of components, which can be cumbersome
// and lead to less maintainable code.
// In this example, we use useContext to access the user data directly in Test2 component
// without having to pass it through Test component, thus avoiding props drilling.
// This is useful when you have deeply nested components and you want to avoid passing props through every level.
// This way, Test2 can access the user data directly from the context without needing to pass it through Test component.

// what is cumbersome in props drilling?
