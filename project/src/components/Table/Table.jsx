import { Table } from "antd";
const columns = [
  {
    title: "Timeframe",
    dataIndex: "timeframe",
    key: "timeframe",
  },
  {
    title: "Price Change",
    dataIndex: "priceChange",
    key: "priceChange",
  },
  {
    title: "Price Change Percentage",
    dataIndex: "priceChangePercentage",
    key: "priceChangePercentage",
  },
];

const TABLE = (props) => (
  <Table
    columns={columns}
    dataSource={props.dataSource}
    bordered={true}
    pagination={false}
  />
);
export default TABLE;
