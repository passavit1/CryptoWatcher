import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Coinlist from "../../data/CoinList/Coinlist.json";
import { CloseCircleFilled } from "@ant-design/icons";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 1% 5%;
  padding: 5px;
  cursor: pointer;

  .Data {
    width: 90%;
    display: flex;
    align-items: baseline;
    gap: ${({ coinListLength }) =>
      coinListLength < 3 ? "20px" : coinListLength >= 4 ? "0" : "10px"};
    white-space: nowrap;
    flex-direction: ${({ coinListLength }) =>
      coinListLength >= 4 ? "column" : "row"};

    @media (min-width: 1000px) {
      gap: ${({ coinListLength }) =>
        coinListLength < 3 ? "40px" : coinListLength >= 5 ? "0" : "20px"};

      flex-direction: ${({ coinListLength }) =>
        coinListLength >= 5 ? "column" : "row"};
    }

    @media (min-width: 1200px) {
      gap: ${({ coinListLength }) =>
        coinListLength < 3
          ? "50px"
          : coinListLength >= 5
          ? "0"
          : coinListLength >= 4
          ? "30px"
          : "45px"};

      flex-direction: ${({ coinListLength }) =>
        coinListLength >= 5 ? "column" : "row"};
    }

    padding-left: ${({ coinListLength }) => {
      switch (coinListLength) {
        case 1:
          return "40%";
        case 2:
          return "20%";
        case 3:
          return "5%";
        case 4:
          return "20%";
        case 5:
          return "15%";
        default:
          return "10%";
      }
    }};

    @media (min-width: 800px) {
      padding-left: ${({ coinListLength }) => {
        switch (coinListLength) {
          case 1:
            return "40%";
          case 2:
            return "20%";
          case 3:
            return "5%";
          case 4:
            return "15%";
          case 5:
            return "15%";
          default:
            return "10%";
        }
      }};
    }

    @media (min-width: 1000px) {
      padding-left: ${({ coinListLength }) => {
        switch (coinListLength) {
          case 1:
            return "40%";
          case 2:
            return "25%";
          case 3:
            return "15%";
          case 4:
            return "5%";
          case 5:
            return "10%";
          default:
            return "10%";
        }
      }};
    }

    @media (min-width: 1200px) {
      padding-left: ${({ coinListLength }) => {
        switch (coinListLength) {
          case 1:
            return "35%";
          case 2:
            return "25%";
          case 3:
            return "10%";
          case 4:
            return "5%";
          case 5:
            return "10%";
          default:
            return "10%";
        }
      }};
    }

    .Symbol {
      font-size: 1rem;
      font-weight: bold;
      color: black;
    }

    .Price {
      font-size: 1rem;
      font-weight: bold;
      color: black;
    }

    .Percent-Change {
      font-size: 0.9rem;
      font-weight: bold;
      color: black;
    }
  }

  .Button {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: start;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      font-weight: 400;
      font-size: 14px;

      &:hover {
        color: red;
      }
    }
  }
`;

const NavCoins = ({ NavCoin, getCoinCount }) => {
  const [coinList, setCoinList] = useState([]);
  const [coinData, setCoinData] = useState({});
  const [coinSymbols, setCoinSymbols] = useState({});

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
        <StyledCard
          key={i}
          className="NavContainer"
          coinListLength={coinList.length}
        >
          <div className="Data">
            <div className="Symbol">
              {coinSymbols[coin]
                ? coinSymbols[coin].toUpperCase()
                : coinSymbols[coin]}
            </div>
            <div className="Price">
              {coinData[coin]?.usd > 1
                ? coinData[coin]?.usd.toLocaleString()
                : coinData[coin]?.usd}{" "}
              $
            </div>
            <div
              className="Percent-Change"
              style={{
                color: coinData[coin]?.usd_24h_change >= 0 ? "green" : "red",
              }}
            >
              {coinData[coin]?.usd_24h_change.toLocaleString()} %
            </div>
          </div>
          <div className="Button">
            {coinList.length > 0 && (
              <button
                onClick={() => {
                  handleDelete(i);
                }}
              >
                X
              </button>
            )}
          </div>
        </StyledCard>
      ))}
    </>
  );
};

export default NavCoins;
