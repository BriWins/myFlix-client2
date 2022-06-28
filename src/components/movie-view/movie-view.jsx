import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        const addFavorite = (e, movie) => {
            e.preventDefault();
            const username = localStorage.getItem("users");
            const token = localStorage.getItem("token");
            axios.post(
                `https://glacial-shore-06302.herokuapp.com/users/${username}/movies/${movie._id}`,
                {},
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              )
              .then((response) => {
                console.log(response);
                alert("Movie has been added to your list!");
              })
              .catch(function (error) {
                console.log(error);
              });
          };

        //   const deleteFavorite = (e, movie) => {
        //     e.preventDefault();
        //     const username = localStorage.getItem("users");
        //     const token = localStorage.getItem("token");
        //     axios.delete(
        //         `https://glacial-shore-06302.herokuapp.com/users/${username}/movies/${movie._id}`,
        //         {},
        //         {
        //           headers: { Authorization: `Bearer ${token}` },
        //         }
        //       )
        //       .then((response) => {
        //         console.log(response);
        //         alert("Movie has has been deleted from your list!");
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       });
        //   };


        return (
      
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img crossorigin="anonymous" variant="top" src={movie.ImgPath} />
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{movie.Ratings}</Card.Subtitle>
                            <Card.Text> {movie.Description}</Card.Text>
                            <Card.Text>ReleaseDate: {movie.ReleaseDate}</Card.Text>
                            <Card.Text>Featured: {movie.Featured}</Card.Text>
                            <Card.Text>Actors/Actresses: {movie.Actors}</Card.Text>
                            <Link to={`/directors/${movie.Director.Name}`}>
                                <Button variant="link">Director</Button>
                            </Link>
                            <Link to={`/genres/${movie.Genre.Name}`}>
                                <Button variant="link">Genre</Button>
                            </Link>   
                            <Button onClick={() => onBackClick(movie)} variant="link">Back</Button>
                            <Button onClick={(e) => { addFavorite(e, movie); }}>Add to Favorites</Button>
                            {/* <Button onClick={(e) => { deleteFavorite(e, movie); }}>Remove</Button> */}
                </Card.Body>
            </Card>
        );
    }
}


MovieView.propTypes = {
    movie: PropTypes.shape({
        ImgPath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ReleaseDate: PropTypes.string.isRequired,
        Featured: PropTypes.boolean,
        Ratings: PropTypes.string.isRequired,
        Actors: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        }).isRequired
};

