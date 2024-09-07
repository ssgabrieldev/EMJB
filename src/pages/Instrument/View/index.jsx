import { Col, Row, } from "antd";

import { getStatus } from "../../../utils/status";

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
          title="Status"
          value={getStatus(instrument.status)}
        />
      </Col>
      <Col
        span={12}
      >
        <InstrumentViewItem
          title="Última Manutenção"
          value={instrument.last_maintenance}
        />
      </Col>
    </Row>
  );
}

export {
  InstrumentView
}
