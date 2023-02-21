import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto text-white">
            <Nav.Link href="#Home">Accueil</Nav.Link>
            <Nav.Link href="#CV">CV</Nav.Link>
            <Nav.Link href="#About">A propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
