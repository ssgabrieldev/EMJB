import { useEffect, useState } from "react";

import { Button, Form, Input, Row, Col, Select, DatePicker, notification } from "antd";

import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

import dayjs from "dayjs";

import { firebaseDb } from "../../../services/firebase";

function InstrumentForm({ instrument, onCancelClick, onSaveSuccess, onSaveFail }) {
  const [submitLoading, setSubmitLoading] = useState(false);

  const [form] = Form.useForm();
  const isEditingForm = !!instrument;

  const onSubmitForm = async (values) => {
    setSubmitLoading(true);

    try {
      if (!isEditingForm) {
        const docRef = await addDoc(collection(firebaseDb, "instruments"), {
          type: values.type,
          mark: values.mark,
          series: values.series,
          status: values.status,
          last_maintenance:  values.last_maintenance ? values.last_maintenance.format("DD/MM/YYYY") : ""
        });
        onSaveSuccess && onSaveSuccess(values, docRef);
      } else {
        const docRef = await updateDoc(doc(firebaseDb, "instruments", instrument.id), {
          type: values.type,
          mark: values.mark,
          series: values.series,
          status: values.status,
          last_maintenance:  values.last_maintenance ? values.last_maintenance.format("DD/MM/YYYY") : ""
        });
        onSaveSuccess && onSaveSuccess(values, docRef);
      }

      notification.success({
        message: "Dados Salvos"
      });
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
        series: instrument.series,
        mark: instrument.mark,
        status: instrument.status,
        last_maintenance: instrument.last_maintenance ? dayjs(instrument.last_maintenance, "DD/MM/YYYY") : ""
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
            label="Status"
            name="status"
            rules={[
              {
                required: true,
                message: "Selecione o status do instrumento."
              }
            ]}
          >
            <Select
              options={[
                {
                  label: "Disponível",
                  value: "available"
                },
                {
                  label: "Reservado",
                  value: "reserved"
                },
                {
                  label: "Em manutenção",
                  value: "maintance"
                }
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Última Manutenção" name="last_maintenance">
            <DatePicker />
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


