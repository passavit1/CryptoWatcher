import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Coinlist from "../../data/CoinList/Coinlist.json";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 130px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 1%;
  padding: 5px;
  cursor: pointer;
`;

const NavCoins = ({ NavCoin, getCoinCount }) => {
  const [coinList, setCoinList] = useState([]);
  const [coinData, setCoinData] = useState({});
  const [coinSymbols, setCoinSymbols] = useState({});

  console.log(coinList, coinData, coinSymbols);

  const handleDelete = (index) => {
    setCoinList(coinList.filter((b, i) => i !== index));
  };

  useEffect(() => {
    if (NavCoin && coinList.length < 6) {
      setCoinList([...coinList, NavCoin]);
      getCoinCount(coinList.length + 1);
    }
  }, [NavCoin]);

  useEffect(() => {
    const fetchCoinData = async () => {
      if (coinList.length) {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: coinList.join(","),
              vs_currencies: "usd",
              include_24hr_change: true,
            },
          }
        );
        setCoinData(response.data);
      }
    };

    const fetchCoinSymbols = () => {
      const symbols = {};
      coinList.forEach((coin) => {
        symbols[coin] = Coinlist.find((c) => c.id === coin)?.symbol;
      });
      setCoinSymbols(symbols);
    };

    fetchCoinData();
    fetchCoinSymbols();
    getCoinCount(coinList.length);
    const intervalId = setInterval(fetchCoinData, 4 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [coinList]);

  return (
    <>
      {coinList.map((coin, i) => (
        <StyledCard key={i} className="NavContainer">
          <div>{coinSymbols[coin]}</div>
          <div>{coinData[coin]?.usd.toLocaleString()} $</div>
          <div>{coinData[coin]?.usd_24h_change.toLocaleString()} %</div>
          {coinList.length > 0 && (
            <button onClick={() => handleDelete(i)}>Delete</button>
          )}
        </StyledCard>
      ))}
    </>
  );
};

export default NavCoins;
