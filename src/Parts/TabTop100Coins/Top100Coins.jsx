import { getCoinList } from "../../data/index";
import { useEffect, useState } from "react";
import { Image as IMAGE, Tooltip } from "antd";
import styled from "styled-components";
import { PlusCircleTwoTone } from "@ant-design/icons";

const HeaderNav = styled.div`
  @media (max-width: 759px) {
    display: none;
  }

  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    top: 0;
    z-index: 1;
    width: 90%;
    margin: 0 5% 5px 5%;
    color: #4f46e5;
    position: sticky;

    > div:first-child {
      width: 25%;
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: 0.9rem;
      color: black;
      padding-left: 5%;

      @media (min-width: 820px) {
        font-size: 1.1rem;
        color: #4f46e5;
      }
    }

    > div:last-child {
      width: 75%;
      font-weight: bold;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      font-size: 0.9rem;
      justify-items: center;

      @media (min-width: 820px) {
        font-size: 1rem;
        color: #4f46e5;
      }

      > div {
        white-space: nowrap;
      }

      > div:first-child {
        padding-left: 20%;
      }

      > div:nth-child(4) {
        padding-right: 20%;
      }

      > div:nth-child(5) {
        padding-right: 40%;
      }
      > div:nth-child(6) {
        padding-right: 20%;
      }
    }
  }
`;

//Coins Data

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 5% 5px 5%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;

  :hover {
    background-color: #f8fdff;
    transition-duration: 0.1s;
  }

  > div:first-child {
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    @media (min-width: 400px) {
      scale: 1.1;
      margin-bottom: 10px;
    }

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
    display: flex;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      font-weight: bold;
    }

    .titleNavCoins {
      width: 50%;
      padding-left: 10%;
    }
    .top100-coin-data {
      text-align: start;
      width: 50%;

      @media (min-width: 400px) {
        padding-left: 5%;
      }
    }
  }

  // responsive @760px

  @media (min-width: 760px) {
    flex-direction: row;

    > div:first-child {
      display: flex;
      width: 30%;
      height: 100%;
      margin: 0;
      justify-content: start;
      scale: 1;
      overflow: hidden;
      align-items: baseline;

      .coin-name {
        font-size: 0.8rem;
      }

      .coin-symbol {
        font-size: 0.7rem;
      }
      .ant-image {
        margin-right: 1%;

        .ant-image-img {
          width: 16px;

          @media (min-width: 800px) {
            width: 18px;
          }
        }
      }
    }

    > div:last-child {
      width: 70%;

      .titleNavCoins {
        display: none;
      }

      .top100-coin-data {
        font-size: 0.8rem;
        white-space: nowrap;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        padding: 0;
        align-items: baseline;
      }
    }
  }

  button {
    display: none;

    @media (min-width: 760px) {
      display: flex;
      align-items: center;
      justify-content: end;
      border: none;
      background-color: transparent;
      font-size: 20px;
      cursor: pointer;
    }

    @media (min-width: 900px) {
      justify-content: center;
    }
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

    const RefreshData = setInterval(fetchData, 4 * 60 * 1000);

    return () => clearInterval(RefreshData);
  }, []);

  return (
    <>
      <HeaderNav>
        <div>COIN</div>
        <div>
          <div>Price</div>
          <div>Change</div>
          <div>% Change</div>
          <div>High</div>
          <div>Low</div>
          <div>MCap</div>
          <div>Watchlist</div>
        </div>
      </HeaderNav>

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
          <div>
            <div className="titleNavCoins">
              <div>Price</div>
              <div>Change</div>
              <div>%Change</div>
              <div>High</div>
              <div>Low</div>
              <div>MCap</div>
              <div></div>
            </div>
            <div className="top100-coin-data">
              <div className="top100-current-price">
                {coin.current_price
                  ? coin.current_price > 1
                    ? coin.current_price.toLocaleString()
                    : coin.current_price.toFixed(4)
                  : "Loading..."}
              </div>
              <div className="top100-price-change">
                {coin.price_change_24h
                  ? coin.price_change_24h > 1
                    ? coin.price_change_24h.toFixed(2)
                    : coin.price_change_24h.toFixed(4)
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
                    : coin.high_24h.toFixed(4)
                  : "Loading..."}
              </div>
              <div className="top100-low">
                {coin.low_24h
                  ? coin.low_24h > 1
                    ? coin.low_24h.toLocaleString()
                    : coin.low_24h.toFixed(4)
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
          </div>
        </StyledDiv>
      ))}
    </>
  );
};

export default Top100Coins;
