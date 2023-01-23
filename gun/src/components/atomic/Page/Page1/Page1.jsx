import { Layout } from 'antd';
import styled from 'styled-components';
import { TextSlide, MyBoxes } from '@atomic';

const StyledHeader = styled.header`
  text-align: center;
  color: #fff;
  height: ${({ Height }) => Height || '64px'};
  padding-inline: 50px;
  line-height: ${({ Height }) => Height || '64px'};
  background-color: ${({ Bgcolor }) => Bgcolor || '#84bcc4'};
`;

const StyledMain = styled.main`
  text-align: center;
  min-height: 80vh;
  line-height: 120px;
  color: #fff;
  background-color: ${({ Bgcolor }) => Bgcolor || '#7b8a8c'};
`;

const StyledFooter = styled.footer`
  text-align: center;
  height: 32px;
  color: #fff;
  background-color: ${({ Bgcolor }) => Bgcolor || '#76b080'};
`;

const Page1 = () => {
  return (
    <>
      <Layout>
        <StyledHeader>Header</StyledHeader>
        <StyledHeader Bgcolor="green" Height="32px">
          <TextSlide />
        </StyledHeader>
        <StyledMain>
          <MyBoxes />
        </StyledMain>
        <StyledFooter>Footer</StyledFooter>
      </Layout>
    </>
  );
};

export default Page1;
