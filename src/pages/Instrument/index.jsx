import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import {
  InstrumentForm
} from "./Form";
import { Button, Col, Row, Typography } from "antd";
import { ArrowLeftOutlined, BackwardOutlined, EditOutlined } from "@ant-design/icons";

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
    setInstrument({
      id: instrumentID,
      name: "Violão",
      amount: 10,
    });
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
    <div id="instrument-page" className="page">
      <Row
        align="middle"
        gutter={[12, 0]}
      >
        <Col>
          <Typography.Link
            onClick={() => navigate("/")}
          >
            <ArrowLeftOutlined />
          </Typography.Link>
        </Col>
        <Col>
          <Typography.Title>
            {title}
          </Typography.Title>
        </Col>
        {
          !editMode && instrumentID && (
            <Col>
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={onEditClick}
              >
              </Button>
            </Col>
          )
        }
      </Row>
      {form}
    </div>
  );
}

export { Instrument };

