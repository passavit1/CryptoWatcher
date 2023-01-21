import { Layout, Button } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const StyledLayout = styled(Layout)`
  .ant-layout-header {
    text-align: center;
    color: #fff;
    height: 64;
    padding-inline: 50;
    line-height: 64px;
    background-color: ${(Bgcolor) => console.log(Bgcolor) || '#7dbcea'};
  }

  .ant-layout-content {
    text-align: center;
    min-height: 80vh;
    line-height: 120px;
    color: #fff;
    background-color: #108ee9;
  }

  .ant-layout-footer {
    text-align: center;
    color: #fff;
    background-color: #7dbcea;
  }
`;

const StyledHeader = styled.header`
  background-color: ${({ Bgcolor }) => Bgcolor || 'yellow'};
`;

const StyledButton = styled(Button)`
  background-color: ${({ color }) => color || 'Green'};
`;

const Page1 = () => {
  return (
    <>
      <StyledLayout>
        <Header>Header</Header>
        <StyledHeader Bgcolor="green">Header</StyledHeader>
        <Content>
          <div>
            <StyledButton color="yellow">Click</StyledButton>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </StyledLayout>
    </>
  );
};

export default Page1;
