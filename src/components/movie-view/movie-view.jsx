import React from "react";
import PropTypes from "prop-types";
import { ProfileView } from "../profile-view/profile-view";

import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

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
        Featured: PropTypes.string,
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

