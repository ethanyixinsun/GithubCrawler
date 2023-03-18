import { Container, Nav, Navbar } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className={styles["nav-container"]}>
        <Navbar.Brand href="/">
          <Github className={styles["icon"]} />Github Crawler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}