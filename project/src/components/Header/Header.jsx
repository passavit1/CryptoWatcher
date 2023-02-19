import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: #05445e;

  .container {
    justify-content: center;
    a {
      color: white;
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
