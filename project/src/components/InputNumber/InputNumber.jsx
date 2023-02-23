import { Form } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";

const { Control, Label, Group } = Form;

const StyledFormGroup = styled(Group)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0 5%;
  margin-bottom: 2%;

  @media (min-width: 576px) {
    margin-bottom: 1%;
  }

  .form-label {
    margin-bottom: 0;
  }

  input {
    width: 30%;
    background-color: #ffffff;
    text-align: end;

    @media (min-width: 768px) {
      width: 50%;
    }
  }
`;

const InputNUM = ({ children, name, value, onChange, clean, ...props }) => {
  const [stateValue, setStateValue] = useState(value);

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;

    setStateValue(inputValue);
    onChange(name, inputValue);
  };

  useEffect(() => {
    setStateValue(clean);
  }, [clean]);

  useEffect(() => {
    setStateValue(value);
  }, [value]);
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
