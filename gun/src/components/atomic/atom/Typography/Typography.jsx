import { Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;

const StyledText = styled(Text)`
  font-size: ${({ fontsize }) => fontsize || 16}px;
`;

const TextMessage = ({ children, fontsize }) => {
  return (
    <StyledText type="warning" fontsize={fontsize}>
      {children}
    </StyledText>
  );
};

export default TextMessage;
