import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="p-0"
        style={{ backgroundColor: "#334960" }}
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <>
          <Navbar.Brand as={Link} to="/home">
            <h1 className="text-white ms-5">WorldTour</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end me-5">
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
                <p className="text-white mt-3 me-3 fw-bolder">
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
        </>
      </Navbar>
    </>
  );
};

export default Header;
