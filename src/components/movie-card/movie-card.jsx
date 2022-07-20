import React from "react";
import PropTypes from "prop-types";
import "./movie-card.scss";

import { Card, Button, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {

        const { movie } = this.props;
    
    return (

        <Container style= {{ paddingTop: "0.75rem" }}>
            <Card  class="center_card"  xs={12} md={4} style={{ width: '20rem' }} className="h-25">
                <div style={{ maxHeight: "35rem", overflow:"hidden" }}>
                <Card.Img crossorigin="anonymous" variant="top" src={movie.ImgPath} />
                </div>
                <Card.Body>
                    <Card.Title class="text">{movie.Title}</Card.Title>
                        <Link class="btn-link" to={`/movies/${movie._id}`}>
                            <Button variant="secondary" size="sm">Open</Button>
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
    Title: PropTypes.string.isRequired
  }).isRequired
};

