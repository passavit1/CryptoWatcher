import { CardBST } from "../../components/index";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { getCoinList } from "../../data/index";
import { useState } from "react";
import { useEffect } from "react";

const StyledCol = styled(Col)`
  padding: 0 2px 2px;

  @media (max-width: 576px) {
    height: 100%;
  }
`;

const GenCard = (numOfCols) => {
  const [Coin, setCoin] = useState([]);

  //Fetch Data Default Coins to show on Card

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinList();
      const filteredCoins = data.filter(
        (coin) =>
          coin.id !== "tether" &&
          coin.id !== "usd-coin" &&
          coin.id !== "binance-usd"
      );
      setCoin(filteredCoins.slice(0, numOfCols));
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 180000);

    return () => clearInterval(interval);
  }, [numOfCols]);

  console.log(Coin);
  const columns =
    Coin.length > 0 &&
    Coin.map((coin) => (
      <StyledCol xs={6} sm={4} md={2} key={coin.id}>
        <CardBST
          InitSymbol={coin.symbol}
          CardCurrentPrice={coin.current_price}
        ></CardBST>
      </StyledCol>
    ));

  return columns;
};

export default GenCard;
