import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: white;
  height: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  .container {
    justify-content: center;

    a {
      text-decoration: none;
      color: #4f46e5;
      font-weight: bolder;
    }
  }
`;

const Header = () => {
  return (
    <StyledNavbar expand="md">
      <Container>
        <Navbar.Brand href="#home">CRYPTO CALCU</Navbar.Brand>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
