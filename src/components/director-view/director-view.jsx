import React from "react";
import PropTypes from "prop-types";

import {Card, Button, Row, Col, Container} from "react-bootstrap";

import { Link } from "react-router-dom";

export class DirectorView extends React.Component {
    render() {
        const { director, movie, onBackClick } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{director.Name}</Card.Title>
                    <Card.Text> Biography: {director.Biography}</Card.Text>
                    <Card.Text> Date of Birth: {director.Birthdate}</Card.Text>
                    <Card.Text> Birthplace: {director.Birthplace}</Card.Text>
                    <Card.Text> Deathplace: {director.Deathplace}</Card.Text>
                    <Button onClick={() => onBackClick(null)} variant="warning">Back</Button>
                </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Header as="h5">Movies from this director</Card.Header>
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

DirectorView.propTypes = {
    director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Biography: PropTypes.string.isRequired,
        Birthdate: PropTypes.number.isRequired,
        Birthplace: PropTypes.string.isRequired,
        Deathplace: PropTypes.string
    }),
    
    movie: PropTypes.shape({
        ImgPath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      })
}

