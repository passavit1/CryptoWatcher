import { Slider, InputNumber } from "antd";
import styled from "styled-components";
import { TEXT } from "../index";
import { useState } from "react";

//Styled Component

const StyledSlider = styled(Slider)`
  width: 95%;

  .ant-slider-mark {
    margin-top: 8px;
  }

  .ant-slider-dot-active {
    background-color: blue;
  }

  .ant-slider-dot:first-child,
  .ant-slider-dot ~ .ant-slider-dot-active {
    background-color: aqua;
    border-color: black;
  }

  .ant-slider-dot {
    width: 0.8rem;
    height: 0.8rem;
    inset-block-start: -1px;
    background-color: green;
    border-color: red;
  }

  .ant-slider-handle::after {
    width: 1rem;
    height: 1rem;
    box-shadow: 0 0 0 2px black;
  }

  .ant-slider-handle:focus::after {
    width: 1rem;
    height: 1rem;
    box-shadow: 0 0 0 2px purple;
    inset-inline-start: 0px;
    inset-block-start: 0px;
  }
`;

const StyledDiv = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 4%;

  @media (min-width: 480px) {
    padding-top: 3%;
  }
  @media (min-width: 768px) {
    padding-top: 2%;
  }
`;

const StyledLeverage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .SetBG {
    text-align: center;
    text-weight: bold;
    background-color: #dedcdc;
    border: 1px solid #474747;
    width: 20%;
  }
`;

const marks = {
  0: "0",
  25: "25",
  50: "50",
  75: "75",
  100: "100",
  125: "125",
};

const trackStyle = {
  backgroundColor: "blue",
  height: "0.75rem",
};

const railStyle = {
  backgroundColor: "red",
  height: "0.75rem",
};

//Return the Function

const SLIDER = () => {
  const [leverage, setLeverage] = useState(25);

  const handleSliderChange = (value) => {
    setLeverage(value);
  };

  const handleInputChange = (value) => {
    if (!isNaN(parseFloat(value))) {
      setLeverage(parseFloat(value));
    }
  };

  return (
    <StyledDiv>
      <StyledLeverage>
        <TEXT strong>LEVERAGE</TEXT>
        <InputNumber
          min={0}
          max={125}
          value={leverage}
          onChange={handleInputChange}
          className="SetBG"
        />
      </StyledLeverage>
      <StyledSlider
        marks={marks}
        defaultValue={25}
        max={125}
        value={leverage}
        onChange={handleSliderChange}
        trackStyle={trackStyle}
        railStyle={railStyle}
      />
    </StyledDiv>
  );
};

export default SLIDER;
