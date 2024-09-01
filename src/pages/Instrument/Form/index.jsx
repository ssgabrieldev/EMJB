import { useEffect } from "react";

import { Button, Form, InputNumber, Input, Row, Col } from "antd";

function InstrumentForm({ instrument, onCancelClick, onSaveSuccess, onSaveFail }) {
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
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item label="Tipo" >
            <Input type="text" name="type" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Marca">
            <Input type="text" name="mark" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Série">
            <Input type="text" name="series" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Quantidade">
            <InputNumber name="amoutn" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row gutter={[4, 0]}>
            <Col>
              <Button
                type="default"
                onClick={onCancelClick}
              >
                Cancelar
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                htmlType="submit"
              >
                Salvar
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export { InstrumentForm };


