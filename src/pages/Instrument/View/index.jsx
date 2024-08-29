import {
  Col,
  Row,
} from "antd";
import { InstrumentViewItem } from "./Item";

function InstrumentView({
  instrument
}) {
  return (
    <Row>
      <Col
        span={12}
      >
        <InstrumentViewItem
          title="Tipo"
          value={instrument.type}
        />
      </Col>
      <Col
        span={12}
      >
        <InstrumentViewItem
          title="Marca"
          value={instrument.mark}
        />
      </Col>
      <Col
        span={12}
      >
        <InstrumentViewItem
          title="Série"
          value={instrument.series}
        />
      </Col>
      <Col
        span={12}
      >
        <InstrumentViewItem
          title="Quantidade"
          value={instrument.amount}
        />
      </Col>
    </Row>
  );
}

export {
  InstrumentView
}
