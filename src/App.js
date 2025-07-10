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
import { ErrorBoundary } from "react-error-boundary";
import Test from "./components/Test";
import { createContext } from "react";

// create context to pass data to Test2 component directly

const Testcontext = createContext();

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
      <ErrorBoundary fallback={<p>Some went wrong !!</p>}>
        <div>
          <NavBar />
          <About />
        </div>
      </ErrorBoundary>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ErrorBoundary fallbackRender={<p>Some went wrong on Dashboard !!</p>}>
        <div>
          <NavBar />
          <DashBoard />
        </div>
      </ErrorBoundary>
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
  const user = { name: "Prashant", age: 25, city: "Delhi" }; // example user object
  return (
    <>
      <div>
        <RouterProvider router={router} />
        <Testcontext.Provider value={user}>
          <Test name="props drilling issue data pass one to another component" />
        </Testcontext.Provider>
      </div>
    </>
  );
}

export default App;
export { Testcontext }; // export the context to use in other components
// This context can be used to pass data to Test2 component directly without props drilling.
// In Test2 component, you can use useContext(Testcontext) to access the user data
// Example usage in Test2 component:
