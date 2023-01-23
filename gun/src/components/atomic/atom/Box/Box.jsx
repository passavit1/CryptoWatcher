import { Row, Col } from 'antd';
import styled from 'styled-components';

const StyledCol = styled(Col)`
  background-color: ${({ Bgcolor }) => Bgcolor || 'aqua'};
  border: 1px solid red;
`;

const StyledRow = styled(Row)`
  height: 80vh;
`;

const MyBoxes = () => {
  return (
    <StyledRow>
      <StyledCol xs={0} sm={4}>
        <div className="box-1">This is box 1</div>
      </StyledCol>
      <StyledCol xs={24} sm={16}>
        <div className="box-2">This is box 2</div>
      </StyledCol>
      <StyledCol xs={0} sm={4}>
        <div className="box-3">This is box 3</div>
      </StyledCol>
    </StyledRow>
  );
};

export default MyBoxes;
