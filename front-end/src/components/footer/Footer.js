import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from "./Footer.module.css"
import { Linkedin, Github } from "react-bootstrap-icons"

export const Footer = () => {
  return (
    <div>
      <hr className={styles["hr"]}></hr>
      <Navbar expand="lg">
        <Container className={styles["nav-container"]}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link style={{ color: 'black' }}>Author @Yixin Sun</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/yixinsun99/">
                <Linkedin className={styles["icon"]} />LinkedIn
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/yixinsun99/">
                <Github className={styles["icon"]} />Github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}