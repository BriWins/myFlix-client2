import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button, Card, Col } from 'react-bootstrap';


export function FavoritesView(props) {
  const { movies, currentUser, token } = props;

  const favoriteMoviesId = movies.map(m => m._id);

  const favoriteMoviesList = movies.filter(m => {
    return favoriteMoviesId.includes(m._id)
  })

  const handleMovieDelete = (movieId) => {
    axios.delete(`https://glacial-shore-06302.herokuapp.com/users/${currentUser}/movies/${movieId}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(() => {
      alert(`${movies.Title} was successfully deleted from your list.`)
      window.open("/users/:username", "_self");
    }).
    catch(error => console.error(error))
  }

  return (
    <Col>
      {favoriteMoviesList.length === 0 ? (
          <p>You have no favorite movies yet.</p>
          ) : (
            favoriteMoviesList.map((movie) => {
              return (
              <Col xs={10} sm={8} md={6} lg={4} >
                <Card>
                  <Link to={`/movies/${movie._id}`}>
                    <Card.Img crossorigin="anonymous" variant="top" src={movie.ImgPath} />
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
    </Col>
  )
}

FavoritesView.propTypes = {
    movie: PropTypes.shape({
      ImgPath: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    })
}

