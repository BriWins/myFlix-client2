import React from "react";
import PropTypes from "prop-types";

import {Card, Button, Row, Col, Container} from "react-bootstrap";


export class DirectorView extends React.Component {

          convertBirthday = (birthdate, Birthdate) => {
            birthdate = birthdate.split("T")[0];
          
            const [year, month, day] = birthdate.split("-");
          
            const result = [month, day, year].join("/");
           
             return result;
          };
          
    render() {
        const { director, onBackClick } = this.props;
 
        return (
            <Container>
                <Row>
                    <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{director.Name}</Card.Title>
                    <Card.Text> Biography: {director.Biography}</Card.Text>
                    
                    <Card.Text>Date of Birth: {this.convertBirthday(director.Birthdate, director.Birthdate)}</Card.Text>
                
                    <Card.Text> Birthplace: {director.Birthplace}</Card.Text>
                    <Card.Text> Deathplace: {director.Deathplace}</Card.Text>
                    <Button onClick={() => onBackClick(null)} variant="warning">Back</Button>
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
}

