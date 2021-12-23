import React from "react";
import styles from "./NavBar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GoogleBtn from "./GoogleBtn";

export default function NavBar() {
  return (
    <div>
      <Navbar className="shadow-sm p-3 mb-5 bg-white rounded">
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            <img src="#" width="100px" alt="logo" />
            공구리숙트
          </Navbar.Brand>
          <Form className="d-flex">
            <FormControl type="search" placeholder="공구 검색" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <GoogleBtn />
            {/* 로그인 시 */}
            {/* <Button className={styles.logout}>로그아웃</Button>
            <Link to="/mypage"><FontAwesomeIcon icon={faUserCircle} size="2x" /></Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}