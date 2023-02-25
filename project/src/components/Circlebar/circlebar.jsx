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
    type="line"
    percent={(100 + props.value).toFixed(2)}
    format={() => `${props.value}%`}
    status="active"
    strokeColor={{
      0: "#DE2130",
      100: "#10EF2F",
    }}
    strokeWidth={30}
  />
);

export default CircleBar;
