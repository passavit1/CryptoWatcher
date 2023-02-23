import { Slider, InputNumber } from "antd";
import styled from "styled-components";
import { TEXT } from "../index";
import { useState } from "react";

//Styled Component

const StyledSlider = styled(Slider)`
  width: 95%;
  margin-top: 3%;

  .ant-slider-track {
    background-color: ${(props) =>
      props.value <= 25
        ? "#11ac27"
        : props.value <= 50
        ? "#61f20d"
        : props.value <= 75
        ? "#96ef10"
        : props.value <= 100
        ? "#dfeb14"
        : props.value <= 120
        ? "#e9b116"
        : "#e53e1a"} !important;

    transition: background-color 0.5s ease-in-out;
  }

  .ant-slider-mark {
    margin-top: 8px;
  }

  .ant-slider-dot:first-child,
  .ant-slider-dot ~ .ant-slider-dot-active {
    border-color: black;
    background-color: ${(props) =>
      props.value <= 25
        ? "#11ac27"
        : props.value <= 50
        ? "#61f20d"
        : props.value <= 75
        ? "#96ef10"
        : props.value <= 100
        ? "#dfeb14"
        : props.value <= 120
        ? "#e9b116"
        : "#e53e1a"} !important;

    transition: background-color 0.2s ease-in-out;
  }

  .ant-slider-dot {
    width: 0.8rem;
    height: 0.8rem;
    inset-block-start: -1px;
  }

  .ant-slider-handle {
    &::before {
      width: 1rem;
      height: 1rem;
    }

    &::after {
      width: 1rem;
      height: 1rem;
      inset-inline-start: 0px;
      inset-block-start: 0px;
      display: none;
    }
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
  height: "0.75rem",
};

const railStyle = {
  backgroundColor: "#ddd",
  height: "0.75rem",
};

//Return the Function

const SLIDER = ({ onChange }) => {
  const [leverage, setLeverage] = useState(25);

  const handleSliderChange = (value) => {
    setLeverage(value);
    onChange(value);
  };

  const handleInputChange = (value) => {
    if (!isNaN(parseFloat(value))) {
      setLeverage(parseFloat(value));
      onChange(value);
    }
  };

  return (
    <StyledDiv>
      <StyledLeverage>
        <TEXT strong>LEVERAGE</TEXT>
        <InputNumber
          min={1}
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
