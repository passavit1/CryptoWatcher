import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const StyledText = styled(Text)`
  color: ${({ color }) => color || "black"};
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-self: ${({ alignSelf }) => alignSelf || "center"};
`;

const TEXT = ({ children, ...props }) => {
  return (
    <>
      <StyledText {...props}>{children}</StyledText>
    </>
  );
};

export default TEXT;
