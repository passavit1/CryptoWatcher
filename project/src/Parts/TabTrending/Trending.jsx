// import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Trending = ({
  ValueSelectedTab,
  handleCoinSelection,
  SelectedCoinInTrending,
}) => {
  const [TrendingCoin, setTrendingCoin] = useState([]);
  const [getID, setGetID] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      setTrendingCoin(response.data.coins);
      setGetID(response.data.coins.map((item) => item.item.id));
    };
    FetchData();
  }, []);

  return (
    <>
      {TrendingCoin ? (
        TrendingCoin.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => {
                  ValueSelectedTab("CoinInfo");
                  handleCoinSelection({
                    id: item.item.id,
                    symbol: item.item.symbol,
                  });
                  SelectedCoinInTrending(false);
                }}
              >
                {item.item.symbol}
              </button>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Trending;
