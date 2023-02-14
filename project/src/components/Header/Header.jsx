import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: #2e3f4f;

  .container {
    a {
      color: white;
    }
  }
`;

const Header = () => {
  return (
    <StyledNavbar expand="md">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
