import { Form } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";

const { Control, Label, Group } = Form;

const StyledFormGroup = styled(Group)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0 5%;

  .form-label {
    margin-bottom: 0;
  }

  input {
    width: 45%;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

const InputNUM = ({ children, ...props }) => {
  const [value, setValue] = useState();

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;

    if (!isNaN(parseFloat(inputValue))) {
      setValue(parseFloat(inputValue));
    }
  };

  return (
    <StyledFormGroup controlId="input-number" {...props}>
      <Label>{children}</Label>
      <Control
        type="number"
        value={value}
        onChange={handleNumberChange}
        placeholder="Enter The Number"
        min={0}
      />
    </StyledFormGroup>
  );
};

export default InputNUM;
