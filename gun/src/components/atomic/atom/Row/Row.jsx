import { Row } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  height: 80vh;
`;

const ROW = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default ROW;
