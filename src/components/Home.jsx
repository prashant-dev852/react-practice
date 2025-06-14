import React from "react";
import PrashantImg from "../assets/image/Prashant.jpg";
import salman from "../assets/image/salman.jpeg";
import virat from "../assets/image/RCB_Virat.jpg";
import UserCard from "./UserCard";

const users = [
  { name: "Prashant", image: PrashantImg, address: "Lucknow" },
  { name: "Salman", image: salman, address: "Mumbai" },
  { name: "Virat", image: virat, address: "Bangalore" },
];

export default function Home() {
  return (
    <>
      <div>
        <h1>Welocme to Home Page</h1>
      </div>
      <div className="container">
        {users.map((user, index) => (
          <UserCard
            id={index}
            name={user.name}
            image={user.image}
            address={user.address}
          />
        ))}
      </div>
    </>
  );
}
