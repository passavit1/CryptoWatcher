import { TEXT } from "../../../components/index";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 0 5%;
  height: 2.5rem;
  margin-bottom: 0.1rem;
  border-bottom: 0.5px dotted #ccc;

  span {
    font-size: 1.3rem;
  }

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    min-width: 25%;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .MarginText {
    font-weight: 450;
  }
`;

const FormResult = ({
  symbol,
  inputValues,
  LeverageValue,
  SelectTypeValue,
  ClearCoin,
  BalanceValue,
}) => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [MarginUse, setMarginUse] = useState("");
  const [CalculateProfit, setCalculateProfit] = useState(0);
  const [CalculateLoss, setCalculateLoss] = useState(0);
  const [Reward, setReward] = useState(0);

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
    if (quantity && LeverageValue) {
      setMarginUse((quantity / LeverageValue).toFixed(2));
    }
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
    setReward((CalculateProfit / Math.abs(CalculateLoss)).toFixed(1));
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
          <TEXT
            className="MarginText"
            style={BalanceValue === 0 ? { display: "none" } : {}}
          >
            {MarginUse !== 0 && BalanceValue !== 0
              ? ((MarginUse / BalanceValue) * 100).toFixed(2) + " "
              : ""}
            %
          </TEXT>
          <TEXT>{MarginUse}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Take Profit : </TEXT>
          {CalculateProfit !== 0 ? (
            <TEXT style={{ color }}>{CalculateProfit}</TEXT>
          ) : null}
          <TEXT>{takeProfit}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Stop Price :</TEXT>
          {CalculateLoss !== 0 ? (
            <TEXT style={{ color: cutlossColor }}>{CalculateLoss}</TEXT>
          ) : null}
          <TEXT>{stopPrice}</TEXT>
        </StyledDiv>
        <StyledDiv>
          <TEXT>Risk : Reward </TEXT>
          <TEXT
            style={
              CalculateProfit === 0 && CalculateLoss === 0
                ? { display: "none" }
                : {}
            }
          >
            1 : {Reward}
          </TEXT>
        </StyledDiv>
      </div>
    </>
  );
};

export default FormResult;
