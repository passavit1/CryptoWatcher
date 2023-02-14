import { useState } from "react";
import { Radio } from "antd";

const BuySellButton = () => {
  const [type, setType] = useState("buy");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <Radio.Group value={type} onChange={handleTypeChange}>
        <Radio.Button value="buy">Buy</Radio.Button>
        <Radio.Button value="sell">Sell</Radio.Button>
      </Radio.Group>
    </>
  );
};

export default BuySellButton;
