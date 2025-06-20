import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import ParamComp from "./components/ParamComp";
import NotFound from "./components/NotFound";
import Course from "./components/Course";
import Results from "./components/Results";

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
    children: [
      { path: "course", element: <Course /> },
      { path: "reports", element: <Results /> },
    ],
  },
  //example of useParams
  {
    path: "/paramComp/:id",
    element: (
      <>
        <NavBar />
        <ParamComp />
      </>
    ),
  }, // undefine path catch here
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
