import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><h1>Vengari</h1> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ marginLeft: '600px' }}>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/home">Home</Link></Nav.Link>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/orders">Orders</Link></Nav.Link>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/admin">Admin</Link></Nav.Link>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/deals">Deals</Link></Nav.Link>
          <Button variant="outline-secondary">Login</Button>{' '}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;