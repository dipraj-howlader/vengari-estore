import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const handleLogin =() =>{
    history.push('/login');
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><h1>Vengari</h1> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto headerFix">
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/home">Home</Link></Nav.Link>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/order">Orders</Link></Nav.Link>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/admin">Admin</Link></Nav.Link>
          <Nav.Link ><Link style={{ textDecoration: 'none', padding: '8px', color: 'black' }} to="/">Deals</Link></Nav.Link>
          

          { loggedInUser.isSignedIn? <p style={{ textDecoration: 'none', padding: '8px', color: 'black' }}>{loggedInUser.Username}</p> :
           <Button onClick={handleLogin} variant="outline-secondary">Login</Button>
                    
                  }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;