import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="p-0"
        style={{ backgroundColor: "#D6EAF8" }}
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <h1>WorldTour</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="link" as={Link} to="/home">
              Home
            </Nav.Link>

            {user.email ? (
              <>
                <Nav.Link className="link" as={Link} to="/myBookings">
                  My Bookings
                </Nav.Link>
                <Nav.Link className="link" as={Link} to="/allBookings">
                  Manage All Bookings
                </Nav.Link>
                <Nav.Link className="link" as={Link} to="/addTour">
                  Add A New Tour
                </Nav.Link>
                <p className="text-dark mt-3 me-3 fw-bolder">
                  {user?.displayName}
                </p>
                <Button onClick={logOut}>LogOut</Button>
              </>
            ) : (
              <>
                <Nav.Link className="link" as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
