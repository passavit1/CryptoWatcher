import styled from 'styled-components';
import { Breadcrumb } from 'antd';

const StyleNav = styled(Breadcrumb)`
  color: white !important;
`;

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        General
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        Layout
      </a>
    )
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    )
  }
];

const Nav = () => {
  return (
    <StyleNav>
      <StyleNav.Item>Ant Design</StyleNav.Item>
      <StyleNav.Item>
        <a href="">Component</a>
      </StyleNav.Item>
      <StyleNav.Item menu={{ items }}>
        <a href="">General</a>
      </StyleNav.Item>
      <StyleNav.Item>Button</StyleNav.Item>
    </StyleNav>
  );
};

export default Nav;
