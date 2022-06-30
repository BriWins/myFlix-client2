import React from "react";
import PropTypes from "prop-types";

import { Card, Button, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {

        const { movie } = this.props;
    
    return (

        <Container fluid style= {{ paddingTop: "0.75rem" }}>
            <Card  xs={12} md={4} style={{ width: '20rem' }}>
                <div style={{ maxHeight: "30rem", overflow:"hidden" }}>
                <Card.Img crossorigin="anonymous" variant="top" src={movie.ImgPath} />
                </div>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                        <Link to={`/movies/${movie._id}`}>
                            <Button variant="link">Open</Button>
                        </Link>
                </Card.Body>
            </Card>  
        </Container>
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

