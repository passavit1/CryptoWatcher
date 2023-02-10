import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

function BlockButton() {
  return (
    <StyledDiv>
      <Button
        variant="primary"
        size="sm"
        style={{ width: "94%" }}
        onClick={() => console.log("hello world")}
      >
        CLEAR
      </Button>
    </StyledDiv>
  );
}

export default BlockButton;
