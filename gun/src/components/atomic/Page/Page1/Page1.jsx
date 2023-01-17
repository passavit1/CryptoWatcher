import { Row, Col, Layout } from 'antd';
import styled from 'styled-components';
import { Nav, TextMessage } from '@atomic';

const { Header, Footer, Content } = Layout;

const StyledCol = styled(Col)`
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  color: ${({ color }) => color || 'aqua'};
`;

const StyledHeader = styled(Layout)`
  background-color: #ff0000;
`;

const Page1 = () => {
  return (
    <>
      <Layout>
        <StyledHeader>
          <TextMessage fontsize={32}>
            <Nav />
          </TextMessage>
        </StyledHeader>
        <Content>
          <Row>
            <StyledCol xs={24} sm={12} bgcolor="green">
              <span>Hello world </span>
            </StyledCol>
            <StyledCol xs={24} sm={12} bgcolor="blue" color="black">
              <span>Hello world 2 </span>
            </StyledCol>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Page1;
