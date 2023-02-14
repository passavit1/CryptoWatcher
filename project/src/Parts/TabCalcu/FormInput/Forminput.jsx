import { InputNUM } from "../../../components/index";
import { BuySellButton } from "../../index";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 10%;

  .ant-radio-group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3%;

    label {
      width: 45%;
      text-align: center;

      &.ant-radio-button-wrapper-checked {
        background-color: red;
      }
    }
  }

  @media (min-width: 578px) {
    margin-top: 8%;
  }
  @media (min-width: 650px) {
    margin-top: 7%;
  }
  @media (min-width: 768px) {
    margin-top: 5%;
  }
`;

const FormInput = ({ inputValues, onInputChange }) => {
  const handleInputChange = (name, value) => {
    onInputChange(name, value);
  };

  return (
    <>
      <StyledDiv>
        <BuySellButton />
        <InputNUM
          name="entryPrice"
          value={inputValues.entryPrice}
          onChange={handleInputChange}
        >
          Entry Price :{" "}
        </InputNUM>
        <InputNUM
          name="quantity"
          value={inputValues.quantity}
          onChange={handleInputChange}
        >
          Quantity :{" "}
        </InputNUM>
        <InputNUM
          name="takeProfit"
          value={inputValues.takeProfit}
          onChange={handleInputChange}
        >
          Take Profit :{" "}
        </InputNUM>
        <InputNUM
          name="stopPrice"
          value={inputValues.stopPrice}
          onChange={handleInputChange}
        >
          Stop Price :{" "}
        </InputNUM>
        <InputNUM
          name="risk"
          value={inputValues.risk}
          onChange={handleInputChange}
        >
          Risk :{" "}
        </InputNUM>
        <InputNUM
          name="reward"
          value={inputValues.reward}
          onChange={handleInputChange}
        >
          Reward :{" "}
        </InputNUM>
      </StyledDiv>
    </>
  );
};

export default FormInput;
