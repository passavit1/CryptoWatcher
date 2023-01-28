import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  height: ${({ height }) => height || '80%'};
  background-color: ${({ Bgcolor }) => Bgcolor || 'white'};
  border: 1px solid red;
`;

const CardAntd = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      <h3>{children}</h3>
    </StyledCard>
  );
};

export default CardAntd;
