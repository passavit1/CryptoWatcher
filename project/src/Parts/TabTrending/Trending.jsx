import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "antd";

const TrendingCoinCard = styled.div`
  height: 250px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  @media (min-width: 650px) {
    justify-content: space-around;
  }

  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .InfoData {
      @media (min-width: 480px) {
        scale: 1.1;
      }

      h3 {
        color: #7422dd;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #4caf50;
        margin-top: 0.5rem;
      }
    }
  }

  .ant-image-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;

    @media (min-width: 480px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const TrendingCoinButton = styled.button`
  width: 80%;
  height: 50px;
  background-color: #4caf50;
  color: white;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 5px;
  cursor: pointer;
`;

const Trending = ({
  ValueSelectedTab,
  handleCoinSelection,
  SelectedCoinInTrending,
}) => {
  const [TrendingCoin, setTrendingCoin] = useState([]);
  const [CoinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      setTrendingCoin(response.data.coins);
    };
    FetchData();
  }, []);

  useEffect(() => {
    if (TrendingCoin.length > 0) {
      const FetchCoinInfo = async () => {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets`,
          {
            params: {
              vs_currency: "usd",
              ids: TrendingCoin.map((coin) => coin.item.id).join(","),
            },
          }
        );
        setCoinInfo(response.data);
      };
      FetchCoinInfo();
    }
  }, [TrendingCoin]);

  return (
    <>
      {TrendingCoin ? (
        CoinInfo.map((item, index) => {
          return (
            <TrendingCoinCard key={index}>
              <div className="container">
                <Image src={item.image} />
                <div className="InfoData">
                  <h3>{item.name}</h3>
                  <div>( {item.symbol.toUpperCase()} )</div>
                  <div className="price">{item.current_price}</div>
                </div>
              </div>
              <TrendingCoinButton
                onClick={() => {
                  ValueSelectedTab("CoinInfo");
                  handleCoinSelection({
                    id: item.id,
                    symbol: item.symbol,
                  });
                  SelectedCoinInTrending(false);
                }}
              >
                View Coin Info
              </TrendingCoinButton>
            </TrendingCoinCard>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Trending;
