import React from "react";
import PropTypes from "prop-types";

import { Card, Button } from "react-bootstrap";


class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
    
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.ImgPath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                {movie.Description}
                </Card.Text>
                    <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
            </Card.Body>
        </Card>  
    }
}


MovieCard.PropTypes = {
  movie: PropTypes.shape({
    ImgPath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired  
};

export default MovieCard;