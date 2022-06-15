import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function UpdateView(props) {
    const { user } = props;
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const [ usernameErr, setUsernameErr ] = useState("");
    const [ passwordErr, setPasswordErr ] = useState("");
    const [ emailErr, setEmailErr ] = useState("");
    const [ values, setValues ] = useState({
        usernameErr: "",
        passwordErr: "",
        emailErr: "",
    });

    // validate user inputs
const validate = () => {
    let isReq = true;
    if(!username){
     setUsernameErr('Username Required');
     isReq = false;
    }else if(username.length < 6){
     setUsernameErr('Username must be 6 characters long');
     isReq = false;
    }
    if(!password){
     setPasswordErr('Password Required');
     isReq = false;
    }else if(password.length < 8){
     setPasswordErr('Password must be 8 characters long');
     isReq = false;
    }
    if (!email){
     setEmailErr("Email Required");
    } else if(email.indexOf("@") === -1) {
     setEmailErr("Email is invalid");
     isReq = false;
    }
    return isReq;
}

    const handleUpdate = (e) => {
        e.preventDefault();
        const isReq = validate();
       const token = localStorage.getItem("token");
       axios.put(`https://glacial-shore-06302.herokuapp.com/users/${user.Username}`, {
        Username: username,
        Password: password,
        Email: email,
        Birthdate: birthdate
       },
    {
        headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
        console.log(response.data);
        alert("Profile was successfully updated.");
        window.open("/users/:username", "_self")
    })
    .catch(error => {
        console.error(error);
        alert("Unable to update profile.");
    });
}


return (
    <Container className="mt-5">
        <Row><h4>Edit Profile</h4></Row>
        <Row>
        <Col sm="10" md="8" lg="6">
    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" 
        placeholder="Username" 
        value={username} 
        onChange={e => setUsername(e.target.value)}
        required/>
        {values.usernameErr && <p>{values.usernameErr}</p>}
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Create password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
        required/>
        {values.passwordErr && <p>{values.passwordErr}</p>}
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email address"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        required/>
        {values.emailErr && <p>{values.emailErr}</p>}
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBirthdate">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" 
        placeholder="DOB format XX/XX/XXXX"
        value={birthdate} onChange={e => setBirthdate(e.target.value)}/>
        {values.birthdateErr && <p>{values.birthdateErr}</p>}
      </Form.Group>
    
    <Form.Group controlId="formButton" className="mt-3">
      <Button onClick={handleUpdate} variant="primary" type="submit">
      Update
      </Button>
      </Form.Group>
    </Form>
    </Col>
    </Row>
    </Container>
    );
    
    }
    
  UpdateView.propTypes = {
        user: PropTypes.exact({
            Username: PropTypes.string.isRequired,
            Password: PropTypes.string.isRequired,
            Email: PropTypes.string.isRequired,
            Birthdate: PropTypes.number
        }).isRequired
    };