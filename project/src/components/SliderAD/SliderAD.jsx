import { Slider } from "antd";
import styled from "styled-components";
import { TEXT } from "../index";
import { useState } from "react";

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
  padding-top: 5%;
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

const handleStyle = {};

const SLIDER = () => {
  const [leverage, setLeverage] = useState(25);

  const handleSliderChange = (value) => {
    setLeverage(value);
  };

  return (
    <StyledDiv>
      <StyledLeverage>
        <TEXT strong>LEVERAGE</TEXT>
        <TEXT class="SetBG" strong>
          {leverage}
        </TEXT>
      </StyledLeverage>
      <StyledSlider
        marks={marks}
        defaultValue={25}
        max={125}
        onChange={handleSliderChange}
        trackStyle={trackStyle}
        railStyle={railStyle}
        handleStyle={handleStyle}
      />
    </StyledDiv>
  );
};

export default SLIDER;
