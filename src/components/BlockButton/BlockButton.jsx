import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12%;
  height: 40px;

  @media (min-width: 576px) {
    margin-top: 9%;
  }

  @media (min-width: 768px) {
    margin-top: 6%;
    margin-bottom: 2%;
  }
  @media (min-width: 1000px) {
    margin-top: 5%;
  }

  Button {
    background-color: #4f46e5;
    color: white;
    font-weight: bold;
    border: 0 solid #e5e7eb;
    transition-duration: 0.5s;
  }

  Button:hover {
    background-color: #9f46e5;
    color: white;
    transition-duration: 0.5s;
  }

  .btn:active {
    background-color: #4f46e5;
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
