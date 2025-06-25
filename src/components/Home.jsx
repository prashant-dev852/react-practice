import React from "react";
import PrashantImg from "../assets/image/Prashant.jpg";
import salman from "../assets/image/salman.jpeg";
import virat from "../assets/image/RCB_Virat.jpg";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";
import UncontrolledForm from "./UncontrolledForm";

const users = [
  { name: "Prashant", image: PrashantImg, address: "Lucknow" },
  { name: "Salman", image: salman, address: "Mumbai" },
  { name: "Virat", image: virat, address: "Bangalore" },
];

export default function Home() {
  const navigate = useNavigate(); // for one page to another page redirect
  const handleClick = () => {
    navigate("/about");
  };

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
      <div>
        <button onClick={handleClick}> Move to About Page</button>
      </div>
      <UncontrolledForm />
    </>
  );
}
