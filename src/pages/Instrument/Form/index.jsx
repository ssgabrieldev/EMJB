import {
  useEffect
} from "react";
import {
  Button,
  Form,
  InputNumber,
  Input
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
      <Form.Item label="Instrumento" >
        <Input type="text" name="name" />
      </Form.Item>
      <Form.Item label="Quantidade">
        <InputNumber name="amoutn" />
      </Form.Item>
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


