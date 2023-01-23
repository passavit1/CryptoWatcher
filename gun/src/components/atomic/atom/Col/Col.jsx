import { Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  background-color: ${({ Bgcolor }) => Bgcolor || 'aqua'};
  border: 1px solid red;
  height: ${({ height }) => height}vh;
`;

const Column = ({ children, xs = 4, sm = 16, Bgcolor, height }) => {
  return (
    <StyledCol xs={xs} sm={sm} Bgcolor={Bgcolor} height={height}>
      {children}
    </StyledCol>
  );
};

export default Column;
