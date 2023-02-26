import { Progress } from "antd";
import styled from "styled-components";

const StyledProgress = styled(Progress)`
  .ant-progress-text {
    color: red;
  }

  .ant-progress-inner {
    border: 1px solid #7c837c;
  }
`;

const CircleBar = (props) => (
  <StyledProgress
    type={props.type || "line"}
    percent={props.percent || (100 + props.value).toFixed(2)}
    format={() => `${props.children || props.value + "%"}`}
    status="active"
    strokeColor={
      props.color
        ? (() => {
            if (props.percent >= 80) return { 0: "#2AD54C" };
            if (props.percent >= 60) return { 0: "#7ADB24" };
            if (props.percent >= 40) return { 0: "#C0DD22" };
            if (props.percent >= 20) return { 0: "#D8B627" };
            return { 0: "#DA3C25" };
          })()
        : {
            0: "#DE2130",
            100: "#10EF2F",
          }
    }
    strokeWidth={props.width || 30}
  />
);

export default CircleBar;
