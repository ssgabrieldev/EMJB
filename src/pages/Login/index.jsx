import { useContext, useState } from "react";

import { Button, Col, Form, Input, Row } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import { signInWithEmailAndPassword } from "firebase/auth";

import { firebaseAuth } from "../../services/firebase";

import { AuthContext } from "../../context/Auth";

import logo from "../../assets/images/logo.png";

import "./index.css";

function Login() {
  const [loadingSubmitForm, setLoadingSubmitForm] = useState(false);
  const authContext = useContext(AuthContext);

  const onSubmitForm = async (values) => {
    setLoadingSubmitForm(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        values.email,
        values.password
      );
      authContext.signin(userCredential);
    } catch (err) {
      console.error("Login:onSubmitForm", err);
    }

    setLoadingSubmitForm(false);
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
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Insira o email para fazer login."
                }
              ]}
            >
              <Input
                type="email"
                name="email"
                prefix={<MailOutlined />}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Senha"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Insira a senha para fazer login."
                }
              ]}
            >
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
              loading={loadingSubmitForm}
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
