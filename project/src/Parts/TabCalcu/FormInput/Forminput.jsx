import { InputNUM } from "../../../components/index";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 10%;

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

const FormInput = () => {
  return (
    <>
      <StyledDiv>
        <InputNUM>Entry Price : </InputNUM>
        <InputNUM>Quantity : </InputNUM>
        <InputNUM>Stop Price : </InputNUM>
        <InputNUM>Take Profit : </InputNUM>
        <InputNUM>Risk : </InputNUM>
        <InputNUM>Reward : </InputNUM>
      </StyledDiv>
    </>
  );
};

export default FormInput;
