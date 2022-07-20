import React, { Fragment } from 'react';
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import PropTypes from "prop-types";


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
    <Container fluid>
    <Navbar 
      style={{ maxHeight: '100px' }}
      sticky="top" expand="lg" className="mb-5" variant="dark" bg="primary" >
   
        <Navbar.Brand href="/">Flix It Up</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
            {isAuth() &&
            <Fragment>
                <Navbar.Text>
              Signed in as: {users}
            </Navbar.Text>
           
                <Nav.Link href="/">Home</Nav.Link>
              
                <Nav.Link href="/favorites-view/${users}">Favs</Nav.Link>
             
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
     
      </Navbar>
      </Container>
        )
      }

      NavBar.propTypes = {
        movies: PropTypes.shape({
          ImgPath: PropTypes.string.isRequired,
          Title: PropTypes.string.isRequired,
          Description: PropTypes.string.isRequired,
        }),
      };