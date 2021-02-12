import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";

const TogglerMenu = () => {
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="trasparent"
        variant="light"
        id="customStyle"
        style={{ justifyContent: "flex-end" }}
      >
        {/* <Navbar.Brand href="#home">Uwe Schäf</Navbar.Brand> */}
        <Navbar.Toggle
          style={{
            fontSize: "2rem",
            height: "5rem",
            width: "5rem",
            backgroundColor: "",
            color: "",
            boxShadow: "  2px .2rem 1rem rgba(0, 0, 0, .5)",
          }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav style={{ fontSize: "1.2rem" }}>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Leistungen</Nav.Link>
            <Nav.Link href="#">Über uns</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Kontankt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Jome</li>
          </ul>
        </Navbar.Collapse>
      </Navbar> */}
    </Container>
  );
};

export default TogglerMenu;
