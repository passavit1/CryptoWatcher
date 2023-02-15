import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 100%;
  background: linear-gradient(90deg, #c7daf0 0, #e6effd);
`;

function CardBST({ children }) {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default CardBST;
