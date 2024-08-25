import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onSubmitForm = async (values) => {
    navigate("/");
  };

  return (
    <div id="login-page" className="page-container">
      <Form
        layout="vertical"
        onFinish={(values) => {
          onSubmitForm(values);
        }}
      >
        <Form.Item>
          <Input type="email" name="email" />
        </Form.Item>
        <Form.Item>
          <Input type="password" name="password" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export { Login };
