import React from "react";
import PropTypes from "prop-types";

import { Card, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
    
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img crossorigin="anonymous" variant="top" src={movie.ImgPath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                {movie.Description}
                </Card.Text>
                <Link to={`/movies/${movie._id}`}>
                    <Button variant="link">Open</Button>
                </Link>
            </Card.Body>
        </Card>  
        );
    }
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImgPath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired
};

