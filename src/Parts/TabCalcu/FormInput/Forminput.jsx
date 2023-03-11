import { InputNUM } from "../../../components/index";
import { BuySellButton } from "../../index";
import styled from "styled-components";

const StyledDiv = styled.div`
  // sc-gikAfH kSeWjg


  margin-top: 5%;

  @media (min-width: 578px) {
    margin-top: 8%;
  }
  @media (min-width: 650px) {
    margin-top: 7%;
  }
  @media (min-width: 768px) {
    margin-top: 5%;
  }

  .ant-radio-group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
    padding-top:3%;



    label {
      width: 45%;
      text-align: center;

      &.ant-radio-button-wrapper-checked {
        color: white;
        background-color: red;
      }
    }

    label:first-child {
        &.ant-radio-button-wrapper-checked {
        color: white;
        background-color: green;
    }
  }
  
`;

const FormInput = ({ inputValues, onInputChange, TypeSelect, ClearField }) => {
  const handleInputChange = (name, value) => {
    onInputChange(name, value);
  };

  const handleTypeSelect = (e) => {
    TypeSelect(e);
  };

  return (
    <>
      <StyledDiv>
        <BuySellButton SelectType={handleTypeSelect} />
        <InputNUM
          name="entryPrice"
          value={inputValues.entryPrice}
          onChange={handleInputChange}
          clean={ClearField}
        >
          Entry Price :{" "}
        </InputNUM>
        <InputNUM
          name="quantity"
          value={inputValues.quantity}
          onChange={handleInputChange}
          clean={ClearField}
        >
          Quantity :{" "}
        </InputNUM>
        <InputNUM
          name="takeProfit"
          value={inputValues.takeProfit}
          onChange={handleInputChange}
          clean={ClearField}
        >
          Take Profit :{" "}
        </InputNUM>
        <InputNUM
          name="stopPrice"
          value={inputValues.stopPrice}
          onChange={handleInputChange}
          clean={ClearField}
        >
          Stop Price :{" "}
        </InputNUM>
      </StyledDiv>
    </>
  );
};

export default FormInput;
