import { getCoinList } from "../../data/index";
import { useEffect, useState } from "react";
import { Image as IMAGE, Tooltip } from "antd";
import styled from "styled-components";
import { PlusCircleTwoTone } from "@ant-design/icons";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  > div:first-child {
    width: 30%;
    display: flex;
    align-items: center;
    font-weight: bold;

    .ant-image {
      margin-right: 3%;
    }

    .coin-name {
      font-size: 16px;
      margin-right: 2%;
    }

    .coin-symbol {
      font-size: 12px;
      color: #999;
    }
  }

  > div:last-child {
    width: 70%;
    display: flex;
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
  }
`;

const Top100Coins = ({ getNavCoin }) => {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await getCoinList();
      setCoinList(list);
    };
    fetchData();
  }, []);

  return (
    <>
      {coinList.map((coin) => (
        <StyledDiv className="container" key={coin.id}>
          <div>
            <IMAGE width={25} src={coin.image} />
            <div className="coin-name">
              {coin.name ? coin.name.toUpperCase() : "Loading..."}
            </div>

            <div className="coin-symbol">
              {coin.symbol ? coin.symbol.toUpperCase() : "Loading..."}
            </div>
          </div>
          <div className="top100-coin-data">
            <div className="top100-current-price">
              {coin.current_price
                ? coin.current_price > 1
                  ? coin.current_price.toLocaleString()
                  : coin.current_price
                : "Loading..."}
            </div>
            <div className="top100-price-change">
              {coin.price_change_24h
                ? coin.price_change_24h > 1
                  ? coin.price_change_24h.toLocaleString()
                  : coin.price_change_24h.toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })
                : "Loading..."}
            </div>
            <div className="top100-price-change-percent">
              {coin.price_change_percentage_24h
                ? coin.price_change_percentage_24h.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })
                : "Loading..."}{" "}
              %
            </div>
            <div className="top100-high">
              {coin.high_24h
                ? coin.high_24h > 1
                  ? coin.high_24h.toLocaleString()
                  : coin.high_24h.toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })
                : "Loading..."}
            </div>
            <div className="top100-low">
              {coin.low_24h
                ? coin.low_24h > 1
                  ? coin.low_24h.toLocaleString()
                  : coin.low_24h.toLocaleString("en-US", {
                      maximumFractionDigits: 4,
                    })
                : "Loading..."}
            </div>
            <div className="top100-market-cap">
              {coin.market_cap
                ? coin.market_cap.toLocaleString()
                : "Loading..."}
            </div>
            <Tooltip title="Add to watch list">
              <button onClick={() => getNavCoin(coin.id)}>
                <PlusCircleTwoTone />
              </button>
            </Tooltip>
          </div>
        </StyledDiv>
      ))}
    </>
  );
};

export default Top100Coins;
