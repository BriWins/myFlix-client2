import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import { Form, Row, Col } from "react-bootstrap";

export function RegistrationView(props) {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const [ usernameErr, setUsernameErr ] = useState("");
    const [ passwordErr, setPasswordErr ] = useState("");
    const [ emailErr, setEmailErr ] = useState("");

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

    const handleRegistration = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (req) {
        axios.post(`https://glacial-shore-06302.herokuapp.com/users`, {
            Username: username,
            Password: password,
            Email: email,
            Birthdate: birthdate
        })
        .then(response => {
            console.log(response.data);
            alert("Registration successful, please login!")
            window.open("/", "_self");
        })
        .catch(e => {
            console.log("Error during registration");
        });
    };
}

return (
<Row className="mt-5">
    <Col md={12}>
        <h3>Sign Up</h3>
        <p></p>
<Form>
  <Form.Group className="mb-3" controlId="formUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" 
    placeholder="Create username" 
    value={username} 
    onChange={e => setUsername(e.target.value)}
    required/>

    <Form.Text className="text-muted">
     Username must be at least 6 characters
    </Form.Text>
    {usernameErr && <p>{usernameErr}</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" 
    placeholder="Create password"
    value={password} 
    onChange={e => setPassword(e.target.value)}
    required/>
   
    <Form.Text className="text-muted">
    Password must be at least 8 characters
    </Form.Text>
    {passwordErr && <p>{passwordErr}</p>}
    </Form.Group>

  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" 
    placeholder="Enter email address"
    value={email} 
    onChange={e => setEmail(e.target.value)}
    required/>

    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
    {emailErr && <p>{emailErr}</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBirthdate">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" 
    placeholder="DOB format XX/XX/XXXX"
    value={birthdate} onChange={e => setBirthdate(e.target.value)}/>
   
    <Form.Text className="text-muted">
    Date of Birth is optional
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="By checking this box, you agree to all Flix It Up app terms and conditions." />
  </Form.Group>
  <Button onClick={handleRegistration} variant="primary" type="submit">
   Register
  </Button>
</Form>
</Col>
</Row>
);

}

RegistrationView.propTypes = {
    register: PropTypes.exact({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.number
    }).isRequired
};