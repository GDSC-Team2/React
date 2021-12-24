import React from "react";
import styles from "./NavBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import GoogleBtn from "./GoogleBtn";
import logo from '../logo.jpg';

export default function NavBar() {
  return (
    <div>
      <Navbar className="shadow-sm p-3 mb-5 bg-white rounded">
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src={logo} width="40px" alt="logo" style={{marginRight: '10px'}}/>
            공구리숙트
          </Navbar.Brand>
          <Nav className="ml-auto">
            <GoogleBtn />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}