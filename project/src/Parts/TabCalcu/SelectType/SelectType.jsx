import { useState } from "react";
import { Radio } from "antd";

const { Group, Button } = Radio;

const BuySellButton = ({ SelectType }) => {
  const [type, setType] = useState("buy");

  const handleTypeChange = (e) => {
    setType(e.target.value);
    SelectType(e.target.value);
  };

  return (
    <>
      <Group value={type} onChange={handleTypeChange}>
        <Button value="buy">Buy</Button>
        <Button value="sell">Sell</Button>
      </Group>
    </>
  );
};

export default BuySellButton;
