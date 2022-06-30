import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {Card, Button, Row, Col, Container} from "react-bootstrap";

export class GenreView extends React.Component {
    render() {
        const { genre, onBackClick } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Movie Genre</Card.Title>
                            <Card.Text> Name: {genre.Name}</Card.Text>
                            <Card.Text> Description: {genre.Description}</Card.Text>
                            <Button onClick={() => onBackClick(null)} variant="warning">Back</Button>
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
}
