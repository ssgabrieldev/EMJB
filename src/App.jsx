import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Login } from "./pages/Login";
import { Instruments } from "./pages/Instruments";
import { Instrument } from "./pages/Instrument";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      key: "login",
      path: "/login",
      element: <Login />
    },
    {
      key: "instruments",
      path: "/",
      element: <Instruments />
    },
    {
      key: "instrument",
      path: "/instrument/:instrumentID?",
      element: <Instrument />
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
