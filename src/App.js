import "./App.css";
import UserCard from "./components/UserCard";
import PrashantImg from "./assets/image/Prashant.jpg";
import salman from "./assets/image/salman.jpeg";
import virat from "./assets/image/RCB_Virat.jpg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <DashBoard />
      </div>
    ),
  },
]);
const users = [
  { name: "Prashant", image: PrashantImg, address: "Lucknow" },
  { name: "Salman", image: salman, address: "Mumbai" },
  { name: "Virat", image: virat, address: "Bangalore" },
];

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
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

export default App;
