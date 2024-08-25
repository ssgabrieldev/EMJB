import {
  useState
} from "react";

import {
  Button,
  Col,
  Popconfirm,
  Row,
  Table,
  Typography
} from "antd";

import {
  DeleteOutlined,
  WarningOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";


function Instruments() {
  const COLUMNS = [
    {
      key: "name",
      title: "Nome",
      align: "center",
      render: (_text, record, _index) => {
        return (
          <Row justify="center">
            <Col>
              <Link
                to={`/instrument/${record.id}`}
              >
                <Button
                  type="link"
                >
                  {record.name}
                </Button>
              </Link>
            </Col>
          </Row>
        );
      }
    },
    {
      key: "amount",
      title: "Quantidade",
      dataIndex: "amount",
      align: "center"
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
      name: "Violão",
      amount: 20
    },
    {
      id: 2,
      name: "Teclado",
      amount: 20
    },
    {
      id: 3,
      name: "Flauta doce",
      amount: 20
    },
    {
      id: 4,
      name: "Bateria",
      amount: 3
    },
    {
      id: 5,
      name: "Saxofone",
      amount: 4
    },
    {
      id: 6,
      name: "Cavaquinho",
      amount: 10
    },
    {
      id: 7,
      name: "Violino",
      amount: 12
    },
    {
      id: 8,
      name: "Baixo",
      amount: 5
    },
    {
      id: 9,
      name: "Guitarra",
      amount: 11
    },
    {
      id: 10,
      name: "Banjo",
      amount: 1
    },
    {
      id: 11,
      name: "Flauta transversal",
      amount: 10
    },
    {
      id: 12,
      name: "Pandeiro",
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
    <div id="intruments-page" className="page-container">
      <Table
      rowKey={"id"}
        columns={COLUMNS}
        dataSource={instruments}
        pagination={{
          position: ["bottomCenter"]
        }}
      />
    </div>
  );
}

export { Instruments };
