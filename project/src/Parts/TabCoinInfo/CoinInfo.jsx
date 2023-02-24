import { Image } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;

  // Pic and Main Info

  .first-line {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:first-child {
      margin: 10px 0;
    }

    .first-line-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid red;
      text-shadow: 2px 2px 1px #d7d7d7;
      font-size: 2rem;
      margin-bottom: 10px;

      > div:first-child {
        color: blue;
        text-align: center;
      }

      div:nth-child(2) {
        span {
          font-size: 1.5rem;
        }
      }

      div:last-child {
        color: yellow;
      }
    }
  }

  // Data - Information

  .data-info {
    .hl24 {
      border: 1px solid red;
    }
  }
`;

const CoinInfo = ({ selectedCoin }) => {
  const [coinInfo, setCoinInfo] = useState({
    image: "",
    price: 0,
    name: "",
    market_cap_rank: 0,
    description: "",
    ath: 0,
    ath_change_percentage: 0,
    homepage: "",
    ath_date: "",
    market_cap: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    price_change_7d: 0,
    price_change_30d: 0,
    price_change_60d: 0,
    price_change_200d: 0,
    price_change_1y: 0,
    price_change_percentage_24h: 0,
    price_change_percentage_7d: 0,
    price_change_percentage_30d: 0,
    price_change_percentage_60d: 0,
    price_change_percentage_200d: 0,
    price_change_percentage_1y: 0,
    market_cap_change_24h: 0,
    market_cap_change_percentage_24h: 0,
    total_supply: 0,
    max_supply: 0,
    circulating_supply: 0,
  });

  const calculatePriceChanges = (coinInfo) => {
    return {
      price_change_7d:
        coinInfo.price -
        coinInfo.price / ((100 + coinInfo.price_change_percentage_7d) / 100),
      price_change_30d:
        coinInfo.price -
        coinInfo.price / ((100 + coinInfo.price_change_percentage_30d) / 100),
      price_change_60d:
        coinInfo.price -
        coinInfo.price / ((100 + coinInfo.price_change_percentage_60d) / 100),
      price_change_200d:
        coinInfo.price -
        coinInfo.price / ((100 + coinInfo.price_change_percentage_200d) / 100),
      price_change_1y:
        coinInfo.price -
        coinInfo.price / ((100 + coinInfo.price_change_percentage_1y) / 100),
    };
  };

  useEffect(() => {
    if (!selectedCoin) return;
    const getCoinData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}`,
        {
          params: {
            tickers: false,
            community_data: false,
            developer_data: false,
            sparkline: true,
          },
        }
      );
      setCoinInfo({
        image: response.data.image.large,
        price: response.data.market_data.current_price.usd,
        name: response.data.name,
        market_cap_rank: response.data.market_cap_rank,
        description: response.data.description.en,
        ath: response.data.market_data.ath.usd,
        ath_change_percentage:
          response.data.market_data.ath_change_percentage.usd,
        homepage: response.data.links.homepage[0],
        ath_date: response.data.market_data.ath_date.usd,
        market_cap: response.data.market_data.market_cap.usd,
        high_24h: response.data.market_data.high_24h.usd,
        low_24h: response.data.market_data.low_24h.usd,
        price_change_24h: response.data.market_data.price_change_24h,
        price_change_percentage_24h:
          response.data.market_data.price_change_percentage_24h,
        price_change_percentage_7d:
          response.data.market_data.price_change_percentage_7d,
        price_change_percentage_30d:
          response.data.market_data.price_change_percentage_30d,
        price_change_percentage_60d:
          response.data.market_data.price_change_percentage_60d,
        price_change_percentage_200d:
          response.data.market_data.price_change_percentage_200d,
        price_change_percentage_1y:
          response.data.market_data.price_change_percentage_1y,
        market_cap_change_24h: response.data.market_data.market_cap_change_24h,
        market_cap_change_percentage_24h:
          response.data.market_data.market_cap_change_percentage_24h,
        total_supply: response.data.market_data.total_supply,
        max_supply: response.data.market_data.max_supply,
        circulating_supply: response.data.market_data.circulating_supply,
        ...calculatePriceChanges(response.data.market_data),
      });
    };
    getCoinData();
  }, [selectedCoin]);

  return (
    <>
      <StyledInfo className="container">
        <div className="first-line">
          <Image width={150} src={coinInfo.image} />
          <div className="first-line-info">
            <div>{coinInfo.name.toUpperCase()}</div>
            <div className="price">
              Price : {coinInfo.price.toLocaleString()}{" "}
              <span
                style={{
                  color:
                    coinInfo.price_change_percentage_24h > 0
                      ? "green"
                      : coinInfo.price_change_percentage_24h < 0
                      ? "red"
                      : "black",
                }}
              >
                {coinInfo.price_change_percentage_24h > 0 ? "+" : "-"}
                {Math.abs(
                  coinInfo.price_change_percentage_24h
                ).toLocaleString()}
                %
              </span>
            </div>
            <div>Market Cap Rank : {coinInfo.market_cap_rank}</div>
          </div>
        </div>
        <div className="data-info">
          <div className="hl24">
            <div>24H High : {coinInfo.high_24h}</div>
            <div>24H Low : {coinInfo.low_24h}</div>
          </div>
          <div>24H Price change : {coinInfo.price_change_24h}</div>
          <div>24H Price Change % : {coinInfo.price_change_percentage_24h}</div>
          <div>7D Price Change : {coinInfo.price_change_7d}</div>
          <div>7D Price Change % : {coinInfo.price_change_percentage_7d}</div>
          <div>30D Price Change : {coinInfo.price_change_30d}</div>
          <div>30D Price Change % : {coinInfo.price_change_percentage_30d}</div>
          <div>60D Price Change : {coinInfo.price_change_60d}</div>
          <div>60D Price Change % : {coinInfo.price_change_percentage_60d}</div>
          <div>200D Price Change : {coinInfo.price_change_200d}</div>
          <div>
            200D Price Change % : {coinInfo.price_change_percentage_200d}
          </div>
          <div>1Y Price Change : {coinInfo.price_change_1y}</div>
          <div>1Y Price Change % : {coinInfo.price_change_percentage_1y}</div>
          <div>ATH : {coinInfo.ath}</div>
          <div>ATH % change : {coinInfo.ath_change_percentage}</div>
          <div>Homepage : {coinInfo.homepage}</div>
          <div>ATH Date : {coinInfo.ath_date}</div>
          <div>Market Cap : {coinInfo.market_cap.toLocaleString()}</div>
          <div>24H Market Cap Change % : {coinInfo.market_cap_change_24h}</div>
          <div>
            24H Market Cap Change % :{" "}
            {coinInfo.market_cap_change_percentage_24h}
          </div>
          <div>Total Supply : {coinInfo.total_supply}</div>
          <div>Max Supply % : {coinInfo.max_supply}</div>
          <div>Circulating Supply : {coinInfo.circulating_supply}</div>
        </div>
        <div>Description : {coinInfo.description}</div>
      </StyledInfo>
    </>
  );
};

export default CoinInfo;
