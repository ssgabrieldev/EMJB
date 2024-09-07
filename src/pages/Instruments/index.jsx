import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Button, Col, Layout, Popconfirm, Row, Table, Typography } from "antd";
import { DeleteOutlined, PlusOutlined, WarningOutlined } from "@ant-design/icons";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import { firebaseDb } from "../../services/firebase";
import { getStatus } from "../../utils/status";

function Instruments() {
  const TITLE = "Instrumentos";
  const COLUMNS = [
    {
      key: "type",
      title: "Tipo",
      render: (_text, record, _index) => {
        return (
          <Row>
            <Col>
              <Link
                to={`/instrument/${record.id}`}
              >
                <Button
                  type="link"
                  style={{
                    padding: 0
                  }}
                >
                  {record.type}
                </Button>
              </Link>
            </Col>
          </Row>
        );
      }
    },
    {
      key: "series",
      title: "Série",
      dataIndex: "series",
    },
    {
      key: "status",
      title: "Status",
      render: (_text, record, _index) => {
        return getStatus(record.status);
      }
    },
    {
      key: "last_maintenance",
      title: "Última Manutenção",
      render: (_text, record, _index) => {
        return record.last_maintenance;
      }
    },
    {
      key: "actions",
      title: "",
      render: (_text, record, _index) => {
        return (
          <Row justify="center">
            <Col>
              <Popconfirm
                title="Tem certeza que deseja remover o registro?"
                okText="Sim"
                cancelText="Não"
                icon={
                  <Typography.Text type="danger">
                    <WarningOutlined />
                  </Typography.Text>
                }
                onConfirm={() => {
                  onClickRemove(record.id)
                }}
              >
                <Button
                  danger
                  type="text"
                  title="Rmover Registro"
                  icon={<DeleteOutlined />}
                />
              </Popconfirm>
            </Col>
          </Row>
        );
      }
    }
  ];

  const [instruments, setInstruments] = useState([]);

  const onClickRemove = async (instrumentId) => {
    try {
      await deleteDoc(doc(firebaseDb, "instruments", instrumentId));

      setInstruments(instruments.filter((instrument) => {
        return instrument.id !== instrumentId;
      }));
    } catch (err) {
      console.error("Instruments:onClickRemove", err);
    }
  };

  const loadInstruments = async () => {
    try {
      const instrumentsSnapshot = await getDocs(collection(firebaseDb, "instruments"));
      setInstruments(instrumentsSnapshot.docs.map((doc) => {
        return ({
          ...doc.data(),
          id: doc.ref.id,
        });
      }));
    } catch (err) {
      console.error("Instruments:loadInstruments", err);
    }
  };

  useEffect(() => {
    loadInstruments();
  }, []);

  return (
    <div
      id="intruments-page"
      className="page"
    >
      <Layout.Header
        className="page-header"
      >
        <Row
          align="middle"
          justify="space-between"
        >
          <Col>
            <Typography.Title
              title={TITLE}
            >
              {TITLE}
            </Typography.Title>
          </Col>
          <Col>
            <Link to="/instrument">
              <Button
                type="primary"
                icon={<PlusOutlined />}
              >
                Novo Instrumento
              </Button>
            </Link>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content
        className="page-content"
      >
        <Table
          style={{
            width: "100%"
          }}
          rowKey={"id"}
          columns={COLUMNS}
          dataSource={instruments}
          pagination={{
            position: ["bottomCenter"]
          }}
        />
      </Layout.Content>
    </div>
  );
}

export { Instruments };
