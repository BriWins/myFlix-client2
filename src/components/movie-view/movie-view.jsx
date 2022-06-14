import React from "react";
import PropTypes from "prop-types";

import { Card, Button } from "react-bootstrap";

class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        return (
      
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={movie.ImgPath} />
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{movie.Ratings}</Card.Subtitle>
                            <Card.Text> {movie.Description}</Card.Text>
                            <Card.Text>ReleaseDate: {movie.ReleaseDate}</Card.Text>
                            <Card.Text>Featured: {movie.Featured}</Card.Text>
                            <Card.Text>Actors/Actresses: {movie.Actors}</Card.Text>
                                <Card.Link href="#">Director</Card.Link>
                                <Card.Link href="#">Genre</Card.Link>
                            <Button onClick={() => onBackClick(movie)} variant="link">Back</Button>
                </Card.Body>
            </Card>
        );
    }
}


MovieView.PropTypes = {
    movie: PropTypes.shape({
        ImgPath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ReleaseDate: PropTypes.number.isRequired,
        Featured: PropTypes.bool,
        Ratings: PropTypes.string.isRequired,
        Actors: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        }).isRequired,
        onBackClick: PropTypes.func.isRequired
};

export default MovieView;