import { Row } from 'antd';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  height: 80vh;
`;

const ROW = ({ children, ...props }) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default ROW;
