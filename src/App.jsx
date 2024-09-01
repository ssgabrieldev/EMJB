import { Route, Routes, useLocation, useNavigate, } from "react-router-dom";

import { Button, Layout, Menu } from "antd";

import { Login } from "./pages/Login";
import { Instruments } from "./pages/Instruments";
import { Instrument } from "./pages/Instrument";

import logo from "./assets/images/logo.png";

import "./App.css";
import { LoginOutlined } from "@ant-design/icons";

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
      element: <Instruments />
    },
    {
      key: "instrument",
      path: "/instrument/:instrumentID?",
      element: <Instrument />
    }
  ];

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="app">
      <Layout
        className="app__content"
      >
        {
          location.pathname != "/login" && (
            <Layout.Sider>
              <div className="menu-logo">
                <img src={logo} alt="EMJB logo" />
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={["instruments"]}
                items={[
                  {
                    key: "instruments",
                    label: "Instrumentos",
                    onClick: () => navigate("/"),
                  }
                ]}
              />
              <Button
                block
                className="logout"
                type="link"
                icon={<LoginOutlined />}
                onClick={() => navigate("/login")}
              >
                Sair
              </Button>
            </Layout.Sider>
          )
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
