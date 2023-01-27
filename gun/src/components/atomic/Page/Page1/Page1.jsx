import { Layout } from 'antd';
import styled from 'styled-components';
import { TextSlide, ROW, Column, CardAntd, InputAntd } from '@atomic';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

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
  color: #fff;
  background-color: ${({ Bgcolor }) => Bgcolor || '#7b8a8c'};
  // display: inline-block;
`;

const StyledFooter = styled.footer`
  text-align: center;
  height: 10vh;
  color: #ff
  background-color: ${({ Bgcolor }) => Bgcolor || '#76b080'};
`;

const Page1 = () => {
  return (
    <>
      <StyledLayout>
        <StyledHeader Height="48px">Header</StyledHeader>
        <StyledHeader Bgcolor="green" Height="32px">
          <TextSlide />
        </StyledHeader>
        <StyledMain>
          <ROW>
            <Column xs={0} sm={4}>
              <ROW>
                <Column sm={24}></Column>
                <Column sm={24}></Column>
                <Column sm={24}></Column>
                <Column sm={24}></Column>
              </ROW>
            </Column>
            <Column xs={24}>
              <ROW align="middle">
                <Column height={70} offset={4}>
                  hello
                </Column>
              </ROW>
            </Column>
            <Column xs={0} sm={4}>
              <ROW gutter={[0, 16]}>
                <Column sm={24} border={'hidden'} Bgcolor={'gray'}>
                  <InputAntd />
                  <CardAntd> card 1 </CardAntd>
                </Column>
              </ROW>
            </Column>
          </ROW>
        </StyledMain>
        <StyledFooter>Footer</StyledFooter>
      </StyledLayout>
    </>
  );
};

export default Page1;
