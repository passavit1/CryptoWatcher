import { CardBST } from "../../components/index";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  padding: 0 2px 2px;

  @media (max-width: 576px) {
    height: 100%;
  }
`;

const GenCard = (numOfCols) => {
  const columns = [];
  for (let i = 0; i < numOfCols; i++) {
    columns.push(
      <StyledCol xs={6} sm={4} md={2}>
        <CardBST>Test</CardBST>
      </StyledCol>
    );
  }
  return columns;
};

export default GenCard;
