import {
  CardBST,
  Header,
  TABS,

} from "../../components/index";
import { GenCard } from "../../Parts/index";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

const DelCol = styled(Col)`
  padding: 0 2px 2px;

  @media (max-width: 575px) {
    display: none;
  }
`;

function IndexPage() {
  const numOfCols = 4;
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
        <Row>
          {columns}
          <DelCol sm={4} md={2}>
            <CardBST>Test</CardBST>
          </DelCol>
          <DelCol sm={4} md={2}>
            <CardBST>Test</CardBST>
          </DelCol>
        </Row>
      </Container>
      <TABS></TABS>
    </>
  );
}

export default IndexPage;
