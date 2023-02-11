import { InputNUM } from "../../../components/index";

const FormInput = () => {
  return (
    <>
      <InputNUM style={{ marginTop: "10%" }}>Entry Price : </InputNUM>
      <InputNUM>Quantity : </InputNUM>
      <InputNUM>Stop Price : </InputNUM>
      <InputNUM>Take Profit : </InputNUM>
      <InputNUM>Risk : </InputNUM>
      <InputNUM>Reward : </InputNUM>
    </>
  );
};

export default FormInput;
