import { Image } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { TABLE, CircleBar } from "../../components/index";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;

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

      text-shadow: 2px 2px 1px #d7d7d7;
      font-size: 2rem;
      margin-bottom: 10px;
      width: 100%;

      > div:first-child {
        color: #7422dd;
        text-align: center;
        font-size: 3rem;

        @media (min-width: 768px) {
          font-size: 4rem;
        }
      }

      div:nth-child(2) {
        span {
          font-size: 1rem;

          @media (min-width: 768px) {
            font-size: 2rem;
          }
        }
      }

      div:last-child {
        font-size: 1.5rem;
        color: #e01f79;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }
    }
  }

  // Data - Information

  .data-info {
    width: 100%;

    .hl24 {
      margin-bottom: 1rem;
      padding: 1rem 0;

      @media (min-width: 480px) {
        padding: 0.8rem 0;
      }

      > div:first-child {
        text-align: center;
        text-weight: 400;
        color: #7422dd;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;

        @media (min-width: 650px) {
          font-size: 1.7rem;
        }

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      > div:nth-child(2) {
        width: 100%;

        div {
          display: inline-block;
          width: 50%;
          color: #ea15a2;
          text-align: center;
          font-weight: 400;
          font-size: 1.2rem;

          @media (min-width: 650px) {
            font-size: 1.4rem;
          }

          @media (min-width: 768px) {
            font-size: 1.8rem;
          }
        }
      }

      > div:last-child {
        width: 100%;

        div {
          display: inline-block;
          width: 50%;
          text-align: center;

          @media (min-width: 650px) {
            font-size: 1.2rem;
          }
          @media (min-width: 768px) {
            font-size: 1.4rem;
          }
        }
      }
    }

    .PriceChangeTable {
      margin-bottom: 1rem;
      th,
      tr,
      td {
        text-align: center;

        @media (min-width: 576px) {
          font-size: 1.1rem;
        }
        @media (min-width: 650px) {
          font-size: 1.2rem;
        }
        @media (min-width: 768px) {
          font-size: 1.4rem;
        }
      }
    }

    .ATH {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      padding: 0.5rem 0;

      > div:first-child {
        text-align: center;
        text-weight: 400;
        color: #7422dd;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;

        @media (min-width: 576px) {
          margin-bottom: 1rem;
        }
        @media (min-width: 650px) {
          font-size: 1.7rem;
        }
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .ATH-SecondLine {
        > div:first-child {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;

          @media (min-width: 576px) {
            margin-bottom: 1.5rem;
          }

          .ant-progress-outer {
            width: 80%;
          }
        }

        .DataNumberATH {
          div {
            display: flex;

            div {
              width: 50%;
              padding-left: 10%;

              @media (min-width: 480px) {
                padding-left: 15%;
              }

              @media (min-width: 576px) {
                padding-left: 17%;
              }

              @media (min-width: 650px) {
                padding-left: 15%;
                font-size: 1.2rem;
              }
              @media (min-width: 768px) {
                padding-left: 17%;
                font-size: 1.4rem;
              }
            }
          }
        }
      }
    }

    .MarketCap {
      margin-bottom: 1rem;

      > div:first-child {
        text-align: center;
        text-weight: 400;
        color: #7422dd;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;

        @media (min-width: 650px) {
          font-size: 1.7rem;
        }
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      > div:last-child {
        .MCTitle {
          display: flex;

          > div {
            width: 50%;
            padding-left: 10%;

            @media (min-width: 480px) {
              padding-left: 15%;
            }

            @media (min-width: 576px) {
              padding-left: 17%;
            }

            @media (min-width: 650px) {
              padding-left: 15%;
              font-size: 1.2rem;
            }
            @media (min-width: 768px) {
              padding-left: 17%;
              font-size: 1.4rem;
            }
          }
        }
      }
    }

    .supply {
      margin-bottom: 1rem;
      padding: 1rem 0;

      > div:first-child {
        text-align: center;
        text-weight: 400;
        color: #7422dd;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;

        @media (min-width: 650px) {
          font-size: 1.7rem;
        }
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      > div:nth-child(2) {
        margin-bottom: 1rem;

        .SupplyTitle {
          display: flex;

          > div {
            width: 50%;
            padding-left: 10%;

            @media (min-width: 480px) {
              padding-left: 15%;
            }

            @media (min-width: 576px) {
              padding-left: 17%;
            }

            @media (min-width: 650px) {
              padding-left: 15%;
              font-size: 1.2rem;
            }
            @media (min-width: 768px) {
              padding-left: 17%;
              font-size: 1.4rem;
            }
          }
        }
      }

      .GraphSupply {
        display: flex;

        > div {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;

          > div:first-child {
            margin-bottom: 0.8rem;
            color: #ea15a2;
            font-size: 1.2rem;
            font-weight: 400;

            @media (min-width: 768px) {
              font-size: 1.4rem;
            }
          }
        }
      }
    }

    .Homepage {
      margin-bottom: 1rem;
      text-align: center;

      div {
        text-align: center;
        text-weight: 400;
        color: #7422dd;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;

        @media (min-width: 650px) {
          font-size: 1.7rem;
        }
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      a {
        @media (min-width: 650px) {
          font-size: 1.2rem;
        }

        @media (min-width: 768px) {
          font-size: 1.4rem;
        }
      }
    }
  }

  // Description

  .Description {
    padding: 1rem 0;

    > div:first-child {
      text-align: center;
      text-weight: 400;
      color: #7422dd;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;

      @media (min-width: 650px) {
        font-size: 1.7rem;
      }
      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    > div:last-child {
      text-align: justify;
      text-overflow: ellipsis;
      padding: 0 1rem;
      line-height: 1.5;
      overflow: hidden;

      @media (min-width: 650px) {
        font-size: 1.2rem;
      }

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
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
        coinInfo.current_price.usd -
        coinInfo.current_price.usd /
          ((100 + coinInfo.price_change_percentage_7d) / 100),
      price_change_30d:
        coinInfo.current_price.usd -
        coinInfo.current_price.usd /
          ((100 + coinInfo.price_change_percentage_30d) / 100),
      price_change_60d:
        coinInfo.current_price.usd -
        coinInfo.current_price.usd /
          ((100 + coinInfo.price_change_percentage_60d) / 100),
      price_change_200d:
        coinInfo.current_price.usd -
        coinInfo.current_price.usd /
          ((100 + coinInfo.price_change_percentage_200d) / 100),
      price_change_1y:
        coinInfo.current_price.usd -
        coinInfo.current_price.usd /
          ((100 + coinInfo.price_change_percentage_1y) / 100),
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

  //Data in Table Price Change

  const dataSource = [
    {
      key: "1",
      timeframe: "24h",
      priceChange: coinInfo.price_change_24h
        ? coinInfo.price_change_24h.toLocaleString()
        : 0,
      priceChangePercentage: coinInfo.price_change_percentage_24h
        ? coinInfo.price_change_percentage_24h.toLocaleString() + " %"
        : 0,
    },

    {
      key: "2",
      timeframe: "7d",
      priceChange: coinInfo.price_change_7d
        ? coinInfo.price_change_7d.toLocaleString()
        : 0,
      priceChangePercentage: coinInfo.price_change_percentage_7d
        ? coinInfo.price_change_percentage_7d.toLocaleString() + " %"
        : 0,
    },
    {
      key: "3",
      timeframe: "30d",
      priceChange: coinInfo.price_change_30d
        ? coinInfo.price_change_30d.toLocaleString()
        : 0,
      priceChangePercentage: coinInfo.price_change_percentage_30d
        ? coinInfo.price_change_percentage_30d.toLocaleString() + " %"
        : 0,
    },
    {
      key: "4",
      timeframe: "60d",
      priceChange: coinInfo.price_change_60d
        ? coinInfo.price_change_60d.toLocaleString()
        : 0,
      priceChangePercentage: coinInfo.price_change_percentage_60d
        ? coinInfo.price_change_percentage_60d.toLocaleString() + " %"
        : 0,
    },
    {
      key: "5",
      timeframe: "200d",
      priceChange: coinInfo.price_change_200d
        ? coinInfo.price_change_200d.toLocaleString()
        : 0,
      priceChangePercentage: coinInfo.price_change_percentage_200d
        ? coinInfo.price_change_percentage_200d.toLocaleString() + " %"
        : 0,
    },
    {
      key: "6",
      timeframe: "1y",
      priceChange: coinInfo.price_change_1y
        ? coinInfo.price_change_1y.toLocaleString()
        : 0,
      priceChangePercentage: coinInfo.price_change_percentage_1y
        ? coinInfo.price_change_percentage_1y.toLocaleString() + " %"
        : 0,
    },
  ];

  // Calculate Day Pass

  const athDate = new Date(coinInfo.ath_date);
  const today = new Date();
  const timeDiff = Math.abs(today.getTime() - athDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

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
            <div>24HR HIGH / LOW </div>
            <div>
              <div>HIGH</div>
              <div>LOW</div>
            </div>
            <div>
              <div>
                {coinInfo.high_24h ? coinInfo.high_24h.toLocaleString() : 0}
              </div>
              <div>
                {coinInfo.low_24h ? coinInfo.low_24h.toLocaleString() : 0}
              </div>
            </div>
          </div>
          <div className="PriceChangeTable">
            <TABLE dataSource={dataSource} />
          </div>
          <div className="ATH">
            <div>ALL TIME HIGH</div>
            <div className="ATH-SecondLine">
              <CircleBar
                value={
                  coinInfo.ath_change_percentage
                    ? parseFloat(coinInfo.ath_change_percentage.toFixed(2))
                    : 0
                }
              />
              <div className="DataNumberATH">
                <div className="ATHPrice">
                  <div className="ATHtitle">All Time High Price</div>
                  <div>{coinInfo.ath ? coinInfo.ath.toLocaleString() : 0}</div>
                </div>
                <div className="ATHPriceChange">
                  <div className="ATHtitle">Price Change </div>
                  <div>
                    {!isNaN(coinInfo.price) && !isNaN(coinInfo.ath)
                      ? (coinInfo.price - coinInfo.ath).toLocaleString()
                      : "Invalid Value"}
                  </div>
                </div>
                <div className="ATHPercentChange">
                  <div className="ATHtitle">Price Change %</div>
                  <div>
                    {coinInfo.ath_change_percentage
                      ? coinInfo.ath_change_percentage.toLocaleString()
                      : 0}{" "}
                    %
                  </div>
                </div>
                <div className="ATHDate">
                  <div className="ATHtitle">ATH Date</div>
                  <div>{coinInfo.ath_date.split("T")[0]}</div>
                </div>
                <div className="DayPass">
                  <div className="ATHtitle">Day Pass</div>
                  <div>{diffDays} Days</div>
                </div>
              </div>
            </div>
          </div>
          <div className="MarketCap">
            <div>MARKET CAP</div>
            <div>
              <div className="MCTitle">
                <div>Market Cap</div>
                <div>
                  {coinInfo.market_cap
                    ? coinInfo.market_cap.toLocaleString()
                    : 0}
                </div>
              </div>
              <div className="MCTitle">
                <div>24H Change</div>
                <div>
                  {coinInfo.market_cap_change_24h
                    ? coinInfo.market_cap_change_24h.toLocaleString()
                    : 0}
                </div>
              </div>
              <div className="MCTitle">
                <div>24H % Change</div>
                <div>
                  {coinInfo.market_cap_change_percentage_24h
                    ? coinInfo.market_cap_change_percentage_24h.toLocaleString()
                    : 0}{" "}
                  %
                </div>
              </div>
            </div>
          </div>
          <div className="supply">
            <div>TOTAL SUPPLY</div>
            <div>
              <div className="SupplyTitle">
                <div>Max Supply </div>
                <div>
                  {coinInfo.max_supply
                    ? coinInfo.max_supply.toLocaleString()
                    : 0}
                </div>
              </div>
              <div className="SupplyTitle">
                <div>Total Supply</div>
                <div>
                  {coinInfo.total_supply
                    ? coinInfo.total_supply.toLocaleString()
                    : 0}
                </div>
              </div>
              <div className="SupplyTitle">
                <div>Circulating Supply</div>
                <div>
                  {coinInfo.circulating_supply
                    ? coinInfo.circulating_supply.toLocaleString()
                    : 0}
                </div>
              </div>
            </div>
            <div className="GraphSupply">
              <div>
                <div>TOTAL</div>
                <CircleBar
                  type="circle"
                  width="15"
                  percent={(coinInfo.total_supply / coinInfo.max_supply) * 100}
                  color="true"
                >
                  {(
                    (coinInfo.total_supply / coinInfo.max_supply) *
                    100
                  ).toFixed(0) + "%"}
                </CircleBar>
              </div>
              <div>
                <div>CIRCULATING</div>
                <CircleBar
                  type="circle"
                  color="true"
                  width="15"
                  percent={
                    (coinInfo.circulating_supply / coinInfo.total_supply) * 100
                  }
                >
                  {(
                    (coinInfo.circulating_supply / coinInfo.total_supply) *
                    100.0
                  ).toFixed(0) + "%"}
                </CircleBar>
              </div>
            </div>
          </div>
          <div className="Homepage">
            <div>HOMEPAGE</div>
            <a href={coinInfo.homepage} target="_blank" rel="noreferrer">
              {coinInfo.homepage}
            </a>
          </div>
        </div>
        <div className="Description">
          <div>DESCRIPTION</div>
          <div>{coinInfo.description}</div>
        </div>
      </StyledInfo>
    </>
  );
};

export default CoinInfo;
