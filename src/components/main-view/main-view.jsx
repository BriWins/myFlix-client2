import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginView from "../login-view/login-view";
import MovieCard from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";
import RegistrationView from "../registration-view/registration-view";

import { Row, Col } from "react-bootstrap";

class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
          this.setState({
            user: localStorage.getItem('user')
          });
          this.getMovies(accessToken);
        }
      }

    getMovies(token) {
        axios.get(`https://glacial-shore-06302.herokuapp.com/movies`, {
          headers: { Authorization: `Bearer ${token}`}
        })
        .then(response => {
          // Assign the result to the state
          this.setState({
            movies: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    
     setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
     }

     onRegistration(register) {
        this.setState({
            register
        });
     }

     onLoggedIn(authData) {
        console.log(authData);
        this.setState({
          user: authData.user.Username
        });
      
        localStorage.setItem("token", authData.token);
        localStorage.setItem("user", authData.user.Username);
        this.getMovies(authData.token);
      }

      onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
          user: null
        });
      }

    render() {
        const { movies, selectedMovie, user, register } = this.state;

        if (!register) return <RegistrationView onRegistration={(register) => this.onRegistration(register)} />;

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view"/>;

        return (

            <Row className="main-view justify-content-md-center">
                {selectedMovie
                ? (
                    <Col md={8}>
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    </Col>
                )
                : 
                movies.map(movie => (
                    <Col md={3}>
                    <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => {this.setSelectedMovie(movie) }} />
                    </Col>
                )) 
            }
           </Row>
        );
    }
}

export default MainView;