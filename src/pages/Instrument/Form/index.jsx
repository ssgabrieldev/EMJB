import {
  useEffect
} from "react";

import {
  Button,
  Form,
  InputNumber,
  Input,
  Row,
  Col
} from "antd";

function InstrumentForm({
  instrument,
  onCancelClick,
  onSaveSuccess,
  onSaveFail
}) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (instrument.id == "1") {
      onSaveSuccess(values);
    } else {
      onSaveFail(values);
    }
  }

  useEffect(() => {
    if (instrument) {
      form.setFieldsValue({
        name: instrument.name,
        amount: instrument.amount
      });
    }
  }, []);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
    >
      <Row
        gutter={[12, 12]}
      >
        <Col
          span={12}
        >
          <Form.Item label="Instrumento" >
            <Input type="text" name="name" />
          </Form.Item>
        </Col>
        <Col
          span={12}
        >
          <Form.Item label="Marca">
            <Input type="text" name="mark" />
          </Form.Item>
        </Col>
        <Col
          span={12}
        >
          <Form.Item label="Série">
            <Input type="text" name="series" />
          </Form.Item>
        </Col>
        <Col
          span={12}
        >
          <Form.Item label="Quantidade">
            <InputNumber name="amoutn" />
          </Form.Item>
        </Col>
      </Row>
      <Button
        type="default"
        onClick={onCancelClick}
      >
        Cancelar
      </Button>
      <Button
        type="primary"
        htmlType="submit"
      >
        Salvar
      </Button>
    </Form>
  );
}

export { InstrumentForm };


