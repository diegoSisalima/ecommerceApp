import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" as={Link} to="/">
          E-commerce
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link href="#" as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link href="#" as={Link} to="/purchases">
            Purchases
          </Nav.Link>
          <Nav.Link>card shop</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
