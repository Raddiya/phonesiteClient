import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = event => {
    event.preventDefault()
    signOut(auth)
    localStorage.removeItem('auth_token')
  }
  return (

    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"><h1>Phone site BD</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/inventory">Inventory</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
              {
                user ? (<>
                  <Nav.Link as={NavLink} to="/manageinventory">Manage Inventory</Nav.Link>
                  <Nav.Link as={NavLink} to="/myitems">My Items</Nav.Link>
                  <Nav.Link as={NavLink} to="/additems">Add Items</Nav.Link>
                  <Nav.Link as={NavLink} onClick={handleSignOut} to="/">Signout</Nav.Link>
                </>) : (<>
                  <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

                </>)

              }


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;