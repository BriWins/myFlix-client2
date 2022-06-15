import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Card, Col } from 'react-bootstrap';


export function FavoritesView(props) {
  const { movies, favoriteMovies, currentUser, token } = props;

  const favoriteMoviesId = favoriteMovies.map(m => m._id)

  const favoriteMoviesList = movies.filter(m => {
    return favoriteMoviesId.includes(m._id)
  })

  const handleMovieDelete = (movieId) => {
    axios.delete(`https://glacial-shore-06302.herokuapp.com/users/${currentUser}/movies/${movieId}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(() => {
      alert(`Movie successfully deleted.`)
      window.open("/users/:username", "_self");
    }).
    catch(error => console.error(error))
  }

  return (
    <Fragment>
      {favoriteMoviesList.length === 0 ? (
          <p>You have no favorite movies yet.</p>
          ) : (
            favoriteMoviesList.map((movie) => {
              return (
              <Col xs={10} sm={8} md={6} lg={4} >
                <Card>
                  <Link to={`/movies/${movie._id}`}>
                    <Card.Img variant="top" src={movie.ImgPath} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Link to={`/movies/${movie._id}`}>
                      <Button className="button" variant="outline-primary" size="sm">Open</Button>
                    </Link>
                    <Button 
                    className="button ml-2" 
                    variant="outline-primary" 
                    size="sm" onClick={()=> {handleMovieDelete(movie._id)}} >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              )
            })
          )
        }
    </Fragment>
  )
}

FavoritesView.propTypes = {
    movie: PropTypes.shape({
      ImgPath: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    })
}