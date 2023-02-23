import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12%;

  @media (min-width: 576px) {
    margin-top: 9%;
  }

  @media (min-width: 768px) {
    margin-top: 6%;
  }

  Button {
    background-color: #bfebf1;
    color: #e43a27;
    font-weight: bold;
  }

  Button:hover {
    background-color: red;
    color: white;
  }

  .btn:active {
    background-color: #bd2818;
    color: white;
  }
`;

function BlockButton({ OnClickClear, ClearingField }) {
  return (
    <StyledDiv>
      <Button
        size="sm"
        style={{ width: "94%" }}
        onClick={() => {
          OnClickClear();
          ClearingField();
        }}
      >
        CLEAR
      </Button>
    </StyledDiv>
  );
}

export default BlockButton;
