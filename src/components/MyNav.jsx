import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <img
          style={{ width: "50px" }}
          src="https://media.istockphoto.com/id/470863140/it/vettoriale/mappa-paesitalia.jpg?s=612x612&w=0&k=20&c=CKwa98J93_SJX8r3mBZhi4veSUWw-5-A58yW9iRQBjE="
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          {/* <Nav.Link href="#features">Home</Nav.Link> */}
          {/* <Nav.Link href="#pricing">About</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
