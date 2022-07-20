import React, { Fragment } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export function NavBar({users}) {

  const isAuth = () => {
    let accessToken = localStorage.getItem('token');
      if (accessToken) {
        return accessToken;
      } else {
        return false;
      }
    };

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  }

return (
    <Navbar fluid="true" sticky="top" expand="lg" className="mb-5" variant="dark" >
      <Container >
        <Navbar.Brand href="/">Flix It Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {isAuth() &&
              <Fragment>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Favs</Nav.Link>
                  <Nav.Link href={`/users/${users}`}>Profile</Nav.Link>
                  <Nav.Link onClick={onLoggedOut}>Sign-out</Nav.Link>
              </Fragment>
              }
              {!isAuth() &&
              <Fragment>
                <Nav.Link href={'/login'}>Sign-in</Nav.Link>
                <Nav.Link href={'/register'}>Sign-up</Nav.Link>
              </Fragment>
              }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default NavBar;

