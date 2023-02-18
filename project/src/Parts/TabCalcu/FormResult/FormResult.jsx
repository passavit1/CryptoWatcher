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

const FormResult = ({
  symbol,
  inputValues,
  LeverageValue,
  SelectTypeValue,
  ClearCoin,
}) => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [MarginUse, setMarginUse] = useState("");
  const [CalculateProfit, setCalculateProfit] = useState("");
  const [CalculateLoss, setCalculateLoss] = useState("");
  const [Reward, setReward] = useState("XXX");

  const { entryPrice, quantity, stopPrice, takeProfit, risk, reward } =
    inputValues;

  const color = CalculateProfit >= 0 ? "green" : "red";
  const cutlossColor = CalculateLoss >= 0 ? "green" : "red";

  // Clear Price After Selected Coin in Trending

  useEffect(() => {
    if (!ClearCoin) setCurrentPrice(null);
  }, [ClearCoin]);

  // Fetch current Price every 4 minutes

  useEffect(() => {
    const fetchCurrentPrice = async () => {
      if (!symbol) return;

      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${symbol.id}&vs_currencies=usd`
      );

      setCurrentPrice(response.data[symbol.id].usd);
      console.log("Current price:", response.data[symbol.id].usd);
    };

    fetchCurrentPrice();

    const UpdatePrice = setInterval(() => {
      fetchCurrentPrice();
    }, 240000);

    return () => clearInterval(UpdatePrice);
  }, [symbol]);

  // Calculate Margin Use

  useEffect(() => {
    setMarginUse((quantity / LeverageValue).toFixed(2));
  }, [quantity, LeverageValue]);

  // Calculate profit and loss

  useEffect(() => {
    if (SelectTypeValue === "buy") {
      if (takeProfit === "") return;
      else {
        setCalculateProfit(
          ((takeProfit - entryPrice) * (quantity / entryPrice)).toFixed(2)
        );
        setCalculateLoss(
          ((stopPrice - entryPrice) * (quantity / entryPrice)).toFixed(2)
        );
      }
    } else {
      if (stopPrice === "") return;
      else {
        setCalculateProfit(
          ((entryPrice - takeProfit) * (quantity / entryPrice)).toFixed(2)
        );
        setCalculateLoss(
          ((entryPrice - stopPrice) * (quantity / entryPrice)).toFixed(2)
        );
      }
    }
  }, [
    takeProfit,
    entryPrice,
    quantity,
    SelectTypeValue,
    currentPrice,
    stopPrice,
  ]);

  // Calculate Risk per Reward

  useEffect(() => {
    setReward((CalculateProfit / Math.abs(CalculateLoss)).toFixed(0));
  }, [CalculateProfit, CalculateLoss]);

  return (
    <>
      <div className="DivContainer">
        <StyledDiv>
          <TEXT>Current Price :</TEXT>
          <TEXT>{currentPrice}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Quantity : </TEXT>
          <TEXT>{quantity}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Margin Use : </TEXT>
          <TEXT>{MarginUse}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Take Profit : </TEXT>
          <TEXT style={{ color }}>{CalculateProfit}</TEXT>
          <TEXT>{takeProfit}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Stop Price :</TEXT>
          <TEXT style={{ color: cutlossColor }}>{CalculateLoss}</TEXT>
          <TEXT>{stopPrice}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Risk : Reward </TEXT>
          <TEXT> 1 : {Reward}</TEXT>
        </StyledDiv>
      </div>
    </>
  );
};

export default FormResult;
