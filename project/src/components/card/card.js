import { Card } from "react-bootstrap";

function CardBST({ children }) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardBST;
