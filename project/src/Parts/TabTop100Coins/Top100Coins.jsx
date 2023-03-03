import { getCoinList } from "../../data/index";
import { useEffect, useState } from "react";
import { Image as IMAGE, Tooltip } from "antd";
import styled from "styled-components";
import { PlusCircleTwoTone } from "@ant-design/icons";

const StyledDiv = styled.div`
  display: flex;
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
          <IMAGE width={30} src={coin.image} />
          <div>{coin.name ? coin.name : "Loading..."}</div>
          <div>{coin.symbol ? coin.symbol : "Loading..."}</div>
          <div>
            {coin.current_price
              ? coin.current_price > 1
                ? coin.current_price.toLocaleString()
                : coin.current_price
              : "Loading..."}
          </div>
          <div>
            {coin.price_change_24h
              ? coin.price_change_24h > 1
                ? coin.price_change_24h.toLocaleString()
                : coin.price_change_24h.toLocaleString("en-US", {
                    maximumFractionDigits: 4,
                  })
              : "Loading..."}
          </div>
          <div>
            {coin.price_change_percentage_24h
              ? coin.price_change_percentage_24h.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })
              : "Loading..."}{" "}
            %
          </div>
          <div>
            {coin.high_24h
              ? coin.high_24h > 1
                ? coin.high_24h.toLocaleString()
                : coin.high_24h.toLocaleString("en-US", {
                    maximumFractionDigits: 4,
                  })
              : "Loading..."}
          </div>
          <div>
            {coin.low_24h
              ? coin.low_24h > 1
                ? coin.low_24h.toLocaleString()
                : coin.low_24h.toLocaleString("en-US", {
                    maximumFractionDigits: 4,
                  })
              : "Loading..."}
          </div>
          <div>
            {coin.market_cap ? coin.market_cap.toLocaleString() : "Loading..."}
          </div>
          <Tooltip title="Add to watch list">
            <button onClick={() => getNavCoin(coin.id)}>
              <PlusCircleTwoTone />
            </button>
          </Tooltip>
        </StyledDiv>
      ))}
    </>
  );
};

export default Top100Coins;
