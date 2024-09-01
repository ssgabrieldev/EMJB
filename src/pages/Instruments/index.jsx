import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Button, Col, Layout, Popconfirm, Row, Table, Typography } from "antd";
import { DeleteOutlined, PlusOutlined, WarningOutlined } from "@ant-design/icons";

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
      key: "amount",
      title: "Quantidade",
      dataIndex: "amount",
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

  const [instruments, setInstruments] = useState([
    {
      id: 1,
      series: 1,
      type: "Violão",
      amount: 20
    },
    {
      id: 2,
      series: 2,
      type: "Teclado",
      amount: 20
    },
    {
      id: 3,
      series: 3,
      type: "Flauta doce",
      amount: 20
    },
    {
      id: 4,
      series: 4,
      type: "Bateria",
      amount: 3
    },
    {
      id: 5,
      series: 5,
      type: "Saxofone",
      amount: 4
    },
    {
      id: 6,
      series: 6,
      type: "Cavaquinho",
      amount: 10
    },
    {
      id: 7,
      series: 7,
      type: "Violino",
      amount: 12
    },
    {
      id: 8,
      series: 8,
      type: "Baixo",
      amount: 5
    },
    {
      id: 9,
      series: 9,
      type: "Guitarra",
      amount: 11
    },
    {
      id: 10,
      series: 10,
      type: "Banjo",
      amount: 1
    },
    {
      id: 11,
      series: 11,
      type: "Flauta transversal",
      amount: 10
    },
    {
      id: 12,
      series: 12,
      type: "Pandeiro",
      amount: 5
    },
  ]);

  const onClickRemove = (instrumentId) => {
    setInstruments((prevInstruments) => {
      return prevInstruments.filter((prevInstrument) => {
        return prevInstrument.id !== instrumentId
      });
    });
  };

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
