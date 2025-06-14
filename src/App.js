import "./App.css";
import UserCard from "./components/UserCard";
import PrashantImg from "./assets/image/Prashant.jpg";
import salman from "./assets/image/salman.jpeg";
import virat from "./assets/image/RCB_Virat.jpg";
import CreateBr

const users = [
  { name: "Prashant", image: PrashantImg, address: "Lucknow" },
  { name: "Salman", image: salman, address: "Mumbai" },
  { name: "Virat", image: virat, address: "Bangalore" },
];


function App() {
  return (
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
  );
}

export default App;
