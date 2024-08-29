import {
  Typography
} from "antd";

function InstrumentViewItem({
  title,
  value
}) {
  return (
    <>
      <Typography.Title
        level={4}
      >
        {title}
      </Typography.Title>
      <Typography.Paragraph>
        {value}
      </Typography.Paragraph>
    </>
  );
}

export {
  InstrumentViewItem
};
