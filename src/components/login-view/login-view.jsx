import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from '../../actions/actions';

import { Form, Button, Row, Col } from "react-bootstrap";

export function LoginView(props) {
    const [ username, setusername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://glacial-shore-06302.herokuapp.com/login`, {
            Username: username,
            Password: password
        })
        .then(response => {
            const data = response.data;
            props.onLoggedIn(data);
            window.open("/", "_self");
        })
        .catch(e => {
            console.log('no such users')
        });
    };

    return (
        <Row className="justify-content-md-center">
            <Col md={4}>
                <Form >
                    <h4>Welcome Back, Please Login!</h4>

                    <Form.Group className="mb-3" controlId="formusername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" value={username} onChange={e => setusername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <p>Not a user?<Link to={`users/register`}>Register Here</Link></p>
                </Form>
            </Col>
        </Row>
    );
}

LoginView.propTypes = {
    users: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
//    onLoggedIn: PropTypes.func.isRequired
};



export default LoginView;

