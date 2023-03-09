import { useState, useEffect } from "react";
import { Header, TABS } from "../../components/index";
import { NavCoins } from "../../Parts/index";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import { FloatButton } from "antd";

const StyledRowNavCoin = styled(Row)`
  display: grid;
  grid-template-columns: repeat(
    ${({ coincount }) => coincount},
    ${({ coincount }) => `${100 / coincount}%`}
  );
  justify-content: center;
`;

const StyledFloatButton = styled.div`
  background-color: red;
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

  // Clear value for user if user want to at the same coin
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavCoin("");
    }, 1000);

    return () => clearTimeout(timer);
  }, [NavCoin]);

  console.log(NavCoin);
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
      <StyledFloatButton className="BackTop">
        <FloatButton.BackTop />
      </StyledFloatButton>
    </>
  );
}

export default IndexPage;
