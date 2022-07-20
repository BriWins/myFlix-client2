import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import { Button, Card, Col } from "react-bootstrap";

export function FavoritesView(props) {
 
const { movies, currentUser, token, favoriteMovies } = props;

  const favoriteMoviesList = movies.filter((m) => {

      return favoriteMovies.includes(m._id);

  });

const handleMovieDelete = (movieId) => {
    axios.delete(`https://glacial-shore-06302.herokuapp.com/users/${currentUser}/movies/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ).then(() => { alert(`${movies.Title} was successfully deleted from your list.`);
      window.open(`/users/:username`, `_self`);
      }).catch((error) => console.error(error));
  };

  return (
    <Col>
      {console.log(favoriteMoviesList)}
      {favoriteMoviesList === 0 ? (
        <p>You have no favorite movies yet.</p>
        ) : (
        favoriteMoviesList.map((movies) => {
          return (
            <Col xs={10} sm={8} md={6} lg={4}>
              {console.log(movies)}
              <Card>
                  <Link to={`/movies/${movies._id}`}>
                    <Card.Img
                      crossorigin="anonymous"
                      variant="top"
                      src={movies.ImgPath}
                    />
                  </Link>

                    <Card.Body>
                      <Card.Title>{movies.Title}</Card.Title>
                      <Card.Text>{movies.Description}</Card.Text>

                        <Link to={`/movies/${movies._id}`}>
                          <Button
                            className="button"
                            variant="outline-primary"
                            size="sm"
                          > Open</Button>
                        </Link>

                        <Button
                          className="button ml-2"
                          variant="outline-primary"
                          size="sm"
                          onClick={() => {
                            handleMovieDelete(movies._id);
                          }} > Remove     
                        </Button>

                    </Card.Body>
              </Card>
            </Col>
          );
        })
      )}
    </Col>
  );
}

FavoritesView.propTypes = {
  movie: PropTypes.shape({
    ImgPath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }),
};