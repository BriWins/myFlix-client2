import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { Button, Row, Col, Container } from "react-bootstrap";

import { FavoritesView } from "./favorites-view";
import { UpdateView } from "./update-view";

export function ProfileView(props) {
    const [users, setUser] = useState(props.users);
    const [movies, setMovies] = useState(props.movies);
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [addFavMovie, setAddFavMovie] = useState([]);

    const currentUser = localStorage.getItem("users");
    const token = localStorage.getItem("token");

    const getUser = () => {
        axios.get(`https://glacial-shore-06302.herokuapp.com/users/${currentUser}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setUser(response.data);
                setFavoriteMovies(response.data, favoriteMovies)
                setAddFavMovie(response.data, addFavMovie);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getUser();
    }, [])

    const handleDelete = () => {
        axios.delete(`https://glacial-shore-06302.herokuapp.com/users/${currentUser}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(() => {
                alert(`The account ${users.Username} was successfully deleted.`)
                localStorage.clear();
                window.open("/register", "_self");
            }).
            catch(error => console.error(error))
    }



    return (
        <Container>
            <Row><h4>Your profile</h4></Row>
            <Row>
                <Col className="label">Username:</Col>
                <Col className="value">{users.Username}</Col>
            </Row>
            <Row className="mt-3">
                <Col className="label">Password:</Col>
                <Col className="value">******</Col>
            </Row>
            <Row className="mt-3">
                <Col className="label">Email:</Col>
                <Col className="value">{users.Email}</Col>
            </Row>
            <Row className="mt-3">
                <Col className="label">Birthday:</Col>
                <Col className="value">{users.Birthdate}</Col>
            </Row>

            <Row className="mt-5"><h4>Your favorite movies</h4></Row>
         
                <FavoritesView movies={movies}
                    favoriteMovies={favoriteMovies}
                    currentUser={currentUser}
                    token={token} /> 
     
             <UpdateView users={users} />
            <Button className="d-block mt-5" variant="warning" onClick={handleDelete}>Delete profile</Button>
        </Container>
    )
}

ProfileView.propTypes = {
    movies: PropTypes.shape({
        ImgPath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }),
    users: PropTypes.exact({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string
    }).isRequired
}



