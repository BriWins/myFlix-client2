import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export function RegistrationView(props) {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");

    const handleRegistration = () => {
        e.preventDefault();
        axios.post(`https://glacial-shore-06302.herokuapp.com/users`, {
            Username: username,
            Password: password,
            Email: email,
            Birthdate: birthdate
        })
        .then(response => {
            console.log(response.data);
            window.open("/", "_self");
        })
        .catch(e => {
            console.log("Error during registration");
        });
    };

    return (
        <form>
           <label>
               Username:
               <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
           </label>
           <label>
               Password:
               <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
           </label>
           <label>
               Email:
               <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
           </label>
           <label>
               Birthdate:
               <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)}/>
           </label>
           <button type="submit" onClick={handleRegistration}>Register</button>
        </form>
       );
}

RegistrationView.PropTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthdate: PropTypes.number
    }).isRequired
};