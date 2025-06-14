import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
  return (
    <div className="user-container">
      <h>Hi My name is Prashant</h>
      <img
        id="user-img"
        src={props.image}
        alt={props.address}
        style={{
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid white",
        }}
      />
    </div>
  );
}
