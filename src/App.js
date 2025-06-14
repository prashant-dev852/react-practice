import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import PrashantImg from "./assests/image/Prashant.jpg";
import salman from "./assests/image/salman.jpeg";
import virat from "./assests/image/RCB_Virat.jpg";

function App() {
  return (
    <div className="container">
      <UserCard name="Prashant" image={PrashantImg} address="Lucknow" />
      <UserCard name="Salman" image={salman} address="Mumbai" />
      <UserCard name="Virat" image={virat} address="Bangalore" />
    </div>
  );
}

export default App;
