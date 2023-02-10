import { Slider } from "antd";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  width: 90%;
`;

const marks = {
  0: "0",
  25: "25",
  50: "50",
  75: "75",
  100: "100",
  125: "125",
};
const SLIDER = () => (
  <>
    <StyledSlider marks={marks} defaultValue={125} />
  </>
);
export default SLIDER;
