import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Layout, Menu } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import { AuthContext } from "../../context/Auth";

import logo from "../../assets/images/logo.png";

export function SideMenu() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const onClickLogout = () => {
    authContext.logout();
  };

  return (
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
        size="large"
        icon={<LoginOutlined />}
        onClick={onClickLogout}
      >
        Sair
      </Button>
    </Layout.Sider>
  );
}
