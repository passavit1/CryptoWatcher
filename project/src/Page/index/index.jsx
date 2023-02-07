import { CardBST, Header, TABS } from "../../components/index";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  padding: 0 2px 2px;

  @media (max-width: 576px) {
    height: 100%;
  }
`;

const DelCol = styled(Col)`
  padding: 0 2px 2px;

  @media (max-width: 576px) {
    display: none;
  }
`;
function IndexPage() {
  return (
    <>
      <Header />
      <Container fluid style={{ backgroundColor: "aqua" }}>
        <Row>
          <StyledCol xs={6} sm={4} md={2}>
            <CardBST>Test</CardBST>
          </StyledCol>
          <StyledCol xs={6} sm={4} md={2}>
            <CardBST>Test</CardBST>
          </StyledCol>
          <StyledCol xs={6} sm={4} md={2}>
            <CardBST>Test</CardBST>
          </StyledCol>
          <StyledCol xs={6} sm={4} md={2}>
            <CardBST>Test</CardBST>
          </StyledCol>
          <DelCol sm={4} md={2}>
            <CardBST>Test</CardBST>
          </DelCol>
          <DelCol sm={4} md={2}>
            <CardBST>Test</CardBST>
          </DelCol>
        </Row>
      </Container>

      <TABS />
    </>
  );
}

export default IndexPage;
