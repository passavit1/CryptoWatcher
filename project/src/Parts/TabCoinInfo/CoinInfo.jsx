import { Image } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const CoinInfo = ({ selectedCoin }) => {
  // Set Info

  const [CoinInfo, setCoinInfo] = useState({
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

  // Destructuring

  const {
    image,
    price,
    name,
    market_cap_rank,
    description,
    ath,
    ath_change_percentage,
    homepage,
    ath_date,
    market_cap,
    high_24h,
    low_24h,
    price_change_24h,
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_200d,
    price_change_percentage_1y,
    market_cap_change_24h,
    market_cap_change_percentage_24h,
    total_supply,
    max_supply,
    circulating_supply,
  } = CoinInfo;

  useEffect(() => {
    if (!selectedCoin) return;
    const SelectedCoinData = async () => {
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
      });
    };
    SelectedCoinData();
  }, [selectedCoin]);

  return (
    <>
      <Image width={200} src={image} />
      <div>{price}</div>
      <div>{name}</div>
      <div>{market_cap_rank}</div>
      <div>{description}</div>
      <div>{ath}</div>
      <div>{ath_change_percentage}</div>
      <div>{homepage}</div>
      <div>{ath_date}</div>
      <div>{market_cap}</div>
      <div>{high_24h}</div>
      <div>{low_24h}</div>
      <div>{price_change_24h}</div>
      <div>{price_change_percentage_24h}</div>
      <div>{price_change_percentage_7d}</div>
      <div>{price_change_percentage_30d}</div>
      <div>{price_change_percentage_60d}</div>
      <div>{price_change_percentage_200d}</div>
      <div>{price_change_percentage_1y}</div>
      <div>{market_cap_change_24h}</div>
      <div>{market_cap_change_percentage_24h}</div>
      <div>{total_supply}</div>
      <div>{max_supply}</div>
      <div>{circulating_supply}</div>
    </>
  );
};

export default CoinInfo;
