import { useState, useEffect } from "react";
import { Header, TABS } from "../../components/index";
import { GenCard } from "../../Parts/index";
import { Row, Container } from "react-bootstrap";

function IndexPage() {
  const [numOfCols, setNumOfCols] = useState(window.innerWidth >= 576 ? 6 : 4);

  useEffect(() => {
    const handleResize = () => {
      setNumOfCols(window.innerWidth >= 576 ? 6 : 4);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const columns = GenCard(numOfCols);

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
        <Row>{columns}</Row>
      </Container>
      <TABS />
    </>
  );
}

export default IndexPage;
