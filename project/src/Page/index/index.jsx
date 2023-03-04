import { useState } from "react";
import { Header, TABS } from "../../components/index";
import { NavCoins } from "../../Parts/index";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledRowNavCoin = styled(Row)`
  display: grid;
  grid-template-columns: repeat(
    ${({ coincount }) => coincount},
    ${({ coincount }) => `${100 / coincount}%`}
  );
  justify-content: center;
`;

function IndexPage() {
  const [NavCoin, setNavCoin] = useState("");
  const [coinCount, setCoinCount] = useState("");

  const getNavCoin = (e) => {
    setNavCoin(e);
  };

  const getCoinCount = (e) => {
    setCoinCount(e);
  };

  console.log(coinCount);
  return (
    <>
      <Header />
      <Container
        fluid
        style={{
          paddingTop: "2px",
          marginBottom: "2px",
        }}
      >
        <StyledRowNavCoin coincount={coinCount}>
          <NavCoins NavCoin={NavCoin} getCoinCount={getCoinCount} />
        </StyledRowNavCoin>
      </Container>
      <TABS getNavCoin={getNavCoin} />
    </>
  );
}

export default IndexPage;
