import React from "react";
import PropTypes from "prop-types";

import {Card, Button, Row, Col, Container} from "react-bootstrap";

import { Link } from "react-router-dom";

export class GenreView extends React.Component {
    render() {
        const { genre, movie, onBackClick } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{genre.Name}</Card.Title>
                    <Card.Text> Name: {genre.Name}</Card.Text>
                    <Card.Text> Description: {genre.Description}</Card.Text>
                  
                    <Button onClick={() => onBackClick(null)} variant="warning">Back</Button>
                </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Header as="h5">Movies within this genre</Card.Header>
                <Card.Img variant="top" src={movie.ImgPath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Link to={`/movies/${movie._id}`}>
                    <Button variant="link">Open</Button>
                </Link>
                </Card.Body>
                </Card>
                </Col>
            
            </Row>
            </Container>
        )
    }
}

GenreView.propTypes = {
    genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }),
    
    movie: PropTypes.shape({
        ImgPath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      })
}
