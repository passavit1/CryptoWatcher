import { TEXT } from "../../../components/index";
import styled from "styled-components";
import { useState } from "react";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;

  span {
    font-size: 1.3rem;
  }

  span:first-child {
    font-weight: bold;
  }
`;

const FormResult = () => {
  const [ProfitColor, setProfitColor] = useState(200);
  const [CutlossColor, setCutlossColor] = useState(-100);

  const color = ProfitColor >= 0 ? "green" : "red";
  const cutlossColor = CutlossColor >= 0 ? "green" : "red";

  return (
    <>
      <StyledDiv>
        <TEXT>Entry Price : </TEXT>
        <TEXT>20000</TEXT>
      </StyledDiv>
      <StyledDiv>
        <TEXT>Quantity : </TEXT>
        <TEXT>20000</TEXT>
      </StyledDiv>
      <StyledDiv>
        <TEXT>Take Profit : </TEXT>
        <TEXT style={{ color }}>{ProfitColor}</TEXT>
        <TEXT>20000</TEXT>
      </StyledDiv>
      <StyledDiv>
        <TEXT>Stop Price :</TEXT>
        <TEXT style={{ color: cutlossColor }}>{CutlossColor}</TEXT>
        <TEXT>20000</TEXT>
      </StyledDiv>
      <StyledDiv>
        <TEXT>Risk : </TEXT>
        <TEXT>20000</TEXT>
      </StyledDiv>
      <StyledDiv>
        <TEXT>Reward : </TEXT>
        <TEXT>20000</TEXT>
      </StyledDiv>
    </>
  );
};

export default FormResult;
