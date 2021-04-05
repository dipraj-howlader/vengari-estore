import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OptionalNavbar.css';

const OptionalNavbar = () => {
    return (
        <div className="navbarr">
            <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Admin Panel</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/admin">Add Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/manageProducts">Manage Product</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        </div>
    );
};

export default OptionalNavbar;