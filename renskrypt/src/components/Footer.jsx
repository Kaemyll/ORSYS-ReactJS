import React from "react";
import { Col, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <footer className="container-fluid bg-dark text-white">
        <div className="row">
          <Col className="justify-content-center">
            <div className="bg-success text-center py-3 rounded">
              ORSYS 2023
            </div>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-center">
              <Nav.Item className="">
                <Nav.Link href="#">Mentions légales</Nav.Link>
              </Nav.Item>
              <Nav.Item className="">
                <Nav.Link href="#">CGU</Nav.Link>
              </Nav.Item>
              <Nav.Item className="">
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <div className="footer-copyright text-center py-3">
              © 2023 by DGA
            </div>
          </Col>
        </div>
      </footer>
    </div>
  );
}
