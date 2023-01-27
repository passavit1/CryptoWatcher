import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  // height: ${({ height }) => height || '100vh'};
`;

const CardAntd = ({ children, ...props }) => {
  return (
    <div style={{ height: 200 }}>
      <StyledCard {...props}>
        <h3>{children}</h3>
      </StyledCard>
    </div>
  );
};

export default CardAntd;
