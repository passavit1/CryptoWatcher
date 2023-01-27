import { Input } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  margin: 2rem 0rem;
`;

const InputAntd = () => {
  return (
    <>
      <StyledInput placeholder="Basic usage" />
    </>
  );
};

export default InputAntd;
