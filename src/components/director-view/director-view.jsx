import React from "react";
import PropTypes from "prop-types";

import {Card, Button, Row, Col, Container} from "react-bootstrap";


export class DirectorView extends React.Component {
    render() {
        const { director, onBackClick, } = this.props;

        // const convertBirthday = (birthdate, Birthdate) => {
        //     birthdate = birthdate.split("T")[0];
        //     birthdate = Birthdate;
          
        //     const [year, month, day] = birthdate.split("-");
          
        //     const result = [month, day, year].join("/");
           
        //      return result;
        //   };
          
        return (
            <Container>
                <Row>
                    <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{director.Name}</Card.Title>
                    <Card.Text> Biography: {director.Biography}</Card.Text>
                    {/* <div birthdate={() => { convertBirthday()}}> */}
                    <Card.Text> Date of Birth: {director.Birthdate}</Card.Text>
                    {/* </div> */}
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

