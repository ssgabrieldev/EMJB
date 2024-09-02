import { useContext, useEffect } from "react";

import { Route, Routes, useLocation, } from "react-router-dom";

import { Layout } from "antd";

import { onAuthStateChanged } from "firebase/auth";

import { AuthContext } from "./context/Auth";

import { firebaseAuth } from "./services/firebase";

import { SideMenu } from "./components/SideMenu";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { Login } from "./pages/Login";
import { Instruments } from "./pages/Instruments";
import { Instrument } from "./pages/Instrument";

import "./App.css";

function App() {
  const routes = [
    {
      key: "login",
      path: "/login",
      element: <Login />
    },
    {
      key: "instruments",
      path: "/",
      element: <ProtectedRoute element={<Instruments />} />
    },
    {
      key: "instrument",
      path: "/instrument/:instrumentID?",
      element: <ProtectedRoute element={<Instrument />} />
    }
  ];

  const authContext = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (authContext.user === null) {
        authContext.signin(currentUser);
      }
    });
  }, []);

  return (
    <div className="app">
      <Layout
        className="app__content"
      >
        {
          location.pathname != "/login" && <SideMenu />
        }
        <Routes>
          {
            routes.map((route) => (
              <Route key={route.key} path={route.path} element={route.element} />
            ))
          }
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
