import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginView from "../login-view/login-view";
import MovieCard from "../movie-card/movie-card";
import MovieView from "../movie-view/movie-view";
import RegistrationView from "../registration-view/registration-view";
import DirectorView from "../director-view/director-view";
import GenreView from "../genre-view/genre-view";

import { Row, Col } from "react-bootstrap";


class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
      //      selectedMovie: null,
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
    
    //  setSelectedMovie(newSelectedMovie) {
    //     this.setState({
    //         selectedMovie: newSelectedMovie
    //     });
    //  }

    //  onRegistration(register) {
    //     this.setState({
    //         register
    //     });
    //  }

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
        const { movies, user } = this.state;

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (movies.length === 0) return <div className="main-view"/>;

        return (
          <Router>
            <Row className="main-view justify-content-md-center">
              <Route exact path="/" render={() => {
                return movies.map(m => (
                  <Col md={3} key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                ))
              }} />

            <Route path="/movies/:movieId" render={({ match, history }) => {
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
              </Col>
            }} />
           

          <Route path="director/:name" render={({ match, history}) => {
            if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
            <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          <Route path="genre/:name" render={({ match, history}) => {
            if (movies.length === 0) return <div className="main-view" />;
            return <Col>
            <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
            </Col>
          }} />


          </Row>
          </Router>
        );
    }
}

export default MainView;