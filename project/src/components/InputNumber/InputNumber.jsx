import { Form } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

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

const InputNUM = ({ children, name, value, onChange, ...props }) => {
  const [stateValue, setStateValue] = useState(value);

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;

    if (!isNaN(parseFloat(inputValue))) {
      setStateValue(parseFloat(inputValue));
      onChange(name, parseFloat(inputValue));
    }
  };

  return (
    <StyledFormGroup controlId="input-number" {...props}>
      <Label>{children}</Label>
      <Control
        type="number"
        name={name}
        value={stateValue}
        onChange={handleNumberChange}
        placeholder="Enter The Number"
        min={0}
      />
    </StyledFormGroup>
  );
};

export default InputNUM;
