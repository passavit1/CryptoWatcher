import { useState, useEffect } from "react";
import { Header, TABS } from "../../components/index";
import { NavCoins } from "../../Parts/index";
import { Row, Container } from "react-bootstrap";

function IndexPage() {
  // const [numOfCols, setNumOfCols] = useState(window.innerWidth >= 576 ? 6 : 4);

  // useEffect for test render when in inspect

  // useEffect(() => {
  //   const handleResize = () => {
  //     setNumOfCols(window.innerWidth >= 576 ? 6 : 4);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const columns = GenCard(numOfCols);

  // Handle Selected Nav Coin

  const [NavCoin, setNavCoin] = useState("");

  const getNavCoin = (e) => {
    setNavCoin(e);
  };

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
        <Row>
          <NavCoins NavCoin={NavCoin} />
        </Row>
      </Container>
      <TABS getNavCoin={getNavCoin} />
    </>
  );
}

export default IndexPage;
