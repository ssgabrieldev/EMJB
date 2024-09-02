import { useEffect, useState } from "react";

import { Button, Form, InputNumber, Input, Row, Col } from "antd";

import { collection, addDoc } from "firebase/firestore";

import { firebaseDb } from "../../../services/firebase";

function InstrumentForm({ instrument, onCancelClick, onSaveSuccess, onSaveFail }) {
  const [submitLoading, setSubmitLoading] = useState(false);

  const [form] = Form.useForm();
  const isEditingForm = !!instrument;

  const onSubmitForm = async (values) => {
    setSubmitLoading(true);

    try {
      if (!isEditingForm) {
        const doc = await addDoc(collection(firebaseDb, "instruments"), {
          type: values.type,
          mark: values.mark,
          series: values.series,
          amount: values.amount
        });
        onSaveSuccess && onSaveSuccess(values, doc);
      }
    } catch (err) {
      console.log("InstrumentForm:onSubmitForm", err);
      onSaveFail && onSaveFail(values);
    }

    setSubmitLoading(false);
  }

  useEffect(() => {
    if (isEditingForm) {
      form.setFieldsValue({
        type: instrument.type,
        amount: instrument.amount,
        series: instrument.series,
        mark: instrument.mark
      });
    }
  }, []);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmitForm}
    >
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item
            label="Tipo"
            name="type"
            rules={[
              {
                required: true,
                message: "Insira o tipo do instrumento."
              }
            ]}
          >
            <Input type="text" name="type" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Marca"
            name="mark"
            rules={[
              {
                required: true,
                message: "Insira a marca do instrumento."
              }
            ]}
          >
            <Input type="text" name="mark" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Série"
            name="series"
            rules={[
              {
                required: true,
                message: "Insira a série do instrumento."
              }
            ]}
          >
            <Input type="text" name="series" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Quantidade"
            name="amount"
            rules={[
              {
                required: true,
                message: "Insira a quantidade de instrumentos."
              }
            ]}
          >
            <InputNumber name="amount" />
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
                loading={submitLoading}
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


