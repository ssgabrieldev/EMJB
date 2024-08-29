import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import {
  Button,
  Col,
  Layout,
  Row,
  Typography
} from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined
} from "@ant-design/icons";

import {
  InstrumentForm
} from "./Form";
import { InstrumentView } from "./View";

function Instrument() {
  const [editMode, setEditMode] = useState(false);
  const [instrument, setInstrument] = useState(null);
  const navigate = useNavigate();
  const {
    instrumentID
  } = useParams();

  let form = null;
  let title = null;

  const getInstrument = (instrumentID) => {
    if (instrumentID === "1") {
      return setInstrument({
        id: instrumentID,
        type: "Violão",
        amount: 10,
        series: "#54321",
        mark: "Gianini"
      });
    }
  };

  const onClickBack = () => {
    if (editMode) {
      return setEditMode(false);
    }

    return navigate("/");
  };

  const onCancelClick = () => {
    if (!instrumentID) {
      return navigate(-1);
    }

    setEditMode(false);
  };

  const onSaveSuccess = (values) => {
    if (!instrumentID) {
      return navigate(-1);
    }

    if (!editMode) {
      setEditMode(true);
    }

    setInstrument((prevInstrument) => {
      return ({
        ...prevInstrument,
        name: values.name,
        amount: values.amount
      });
    });
  };

  const onEditClick = () => {
    setEditMode(true);
  };

  useEffect(() => {
    if (instrumentID) {
      getInstrument(instrumentID);
    }
  }, []);

  if (instrumentID) {
    if (editMode) {
      form = <InstrumentForm
        instrument={instrument}
        onCancelClick={onCancelClick}
        onSaveSuccess={onSaveSuccess}
      />;
      title = "Editar Instrumento";
    } else {
      title = "Instrumento";
    }
  } else {
    form = <InstrumentForm
      onCancelClick={onCancelClick}
      onSaveSuccess={onSaveSuccess}
    />;
    title = "Criar Instrumento";
  }

  return (
    <div
      id="instrument-page"
      className="page"
    >
      <Layout.Header className="page-header">
        <Row
          align="middle"
          gutter={[12, 0]}
        >
          <Col>
            <Button
              type="link"
              icon={<ArrowLeftOutlined />}
              onClick={onClickBack}
              style={{
                width: "fit-content"
              }}
            />
          </Col>
          <Col>
            <Typography.Title title={title}>
              {title}
            </Typography.Title>
          </Col>
          {
            !editMode && instrumentID && (
              <>
                <Col>
                  <Button
                    type="link"
                    icon={<EditOutlined />}
                    onClick={onEditClick}
                  >
                  </Button>
                </Col>
              </>
            )
          }
        </Row>
      </Layout.Header>
      <Layout.Content
        className="page-content"
      >
        {
          instrument
          && !editMode
          && instrumentID
          && (
            <Col span={24}>
              <InstrumentView
                instrument={instrument}
              />
            </Col>
          )
        }
        {(!instrumentID || editMode) && form}
      </Layout.Content>
    </div>
  );
}

export { Instrument };

