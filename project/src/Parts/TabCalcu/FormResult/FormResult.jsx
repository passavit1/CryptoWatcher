import { TEXT } from "../../../components/index";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

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

const FormResult = ({ symbol }) => {
  const [ProfitColor, setProfitColor] = useState(200);
  const [CutlossColor, setCutlossColor] = useState(-100);
  const [currentPrice, setCurrentPrice] = useState(null);

  const color = ProfitColor >= 0 ? "green" : "red";
  const cutlossColor = CutlossColor >= 0 ? "green" : "red";

  useEffect(() => {
    const fetchCurrentPrice = async () => {
      if (!symbol) return;

      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${symbol.id}&vs_currencies=usd`
      );

      setCurrentPrice(response.data[symbol.id].usd);
    };

    fetchCurrentPrice();
  }, [symbol]);

  return (
    <>
      <div className="DivContainer">
        <StyledDiv>
          <TEXT>Current Price :</TEXT>
          <TEXT>{currentPrice}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Quantity : </TEXT>
          <TEXT>20000</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Margin Use : </TEXT>
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
          <TEXT>Risk : Reward </TEXT>
          <TEXT>20000</TEXT>
        </StyledDiv>
      </div>
    </>
  );
};

export default FormResult;
