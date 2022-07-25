import React, { Component } from 'react';
import axios from "axios";
import "./movie-view.scss";

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

        //   const convertRelease = (date, ReleaseDate) => {
        //     date = date.split("T")[0];
          
        //     const [year, month, day] = ReleaseDate.split("-");
          
        //     const result = [month, day, year].join("/");
           
        //      return result;
        //   };

        return (
          

            <Card style={{ width: '18rem' }}>
                <Card.Body >
                <Card.Img crossorigin="anonymous" variant="top" src={movie.ImgPath}/>
                        <Card.Title class="card_movieview-title">{movie.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{movie.Ratings}</Card.Subtitle>
                                <Card.Text> {movie.Description}</Card.Text>
                                <Card.Text >Release Date: {movie.ReleaseDate}</Card.Text>
                                <Card.Text>Actors/Actresses: {movie.Actors}</Card.Text>
                                    <Link to={`/directors/${movie.Director.Name}`}>
                                        <Button variant="link">Director</Button>
                                    </Link>
                                    <Link to={`/genres/${movie.Genre.Name}`}>
                                        <Button variant="link">Genre</Button>
                                    </Link>   
                            <Button onClick={() => onBackClick(movie)} variant="link">Back</Button>
                            <Button onClick={(e) => { addFavorite(e, movie); }}>Add to Favorites</Button>
                </Card.Body>
            </Card>
        );
    }
}


// MovieView.propTypes = {
//     movie: PropTypes.shape({
//         ImgPath: PropTypes.string.isRequired,
//         Title: PropTypes.string.isRequired,
//         Description: PropTypes.string.isRequired,
//         ReleaseDate: PropTypes.number.isRequired,
//         Ratings: PropTypes.string.isRequired,
//         Actors: PropTypes.string.isRequired,
//         Genre: PropTypes.shape({
//             Name: PropTypes.string.isRequired
//         }),
//         Director: PropTypes.shape({
//             Name: PropTypes.string.isRequired
//         }),
//         })
// };

