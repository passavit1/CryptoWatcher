import styled from "styled-components";
import { getCoinList } from "../../data/index";
import { useState } from "react";
import { FormControl, Dropdown, Button, Form, Card } from "react-bootstrap";

const StyledCard = styled(Card)`
  width: 100%;
  background: linear-gradient(90deg, #c7daf0 0, #e6effd);
`;

function CardBST({ children, name }) {
  const [SelectCoin, SetSelectCoin] = useState("");

  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>
          <Dropdown>
            <Button variant="danger">{name || "Select"}</Button>
            <Dropdown.Toggle split variant="danger" id="dropdown-basic" />
          </Dropdown>
        </Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
}

export default CardBST;
