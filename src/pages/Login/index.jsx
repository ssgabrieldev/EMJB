import { useNavigate } from "react-router-dom";

import { Button, Col, Form, Input, Row } from "antd";

import logo from "../../assets/images/logo.png";

import "./index.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

function Login() {
  const navigate = useNavigate();

  const onSubmitForm = async (values) => {
    navigate("/");
  };

  return (
    <div className="login-page page">
      <Form
        className="login-page__form"
        layout="vertical"
        onFinish={(values) => {
          onSubmitForm(values);
        }}
      >
        <Row justify={"center"} gutter={[4, 4]}>
          <Col className="login-page__form__logo">
            <img src={logo} alt="EMJB logo" />
          </Col>
          <Col span={24}>
            <Form.Item label="E-mail">
              <Input
                type="email"
                name="email"
                prefix={<MailOutlined />}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Senha">
              <Input
                type="password"
                name="password"
                prefix={<LockOutlined />}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button
              block
              type="primary"
              htmlType="submit"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export { Login };
