import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { LoginView } from "../login-view/login-view";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { UpdateView } from "../profile-view/update-view";
import { FavoritesView } from "../profile-view/favorites-view";
import { NavBar } from "../navbar/navbar";
import { MovieCard } from "../movie-card/movie-card";

import { Row, Col } from "react-bootstrap/";

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      users: null
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        users: localStorage.getItem('users')
      });
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      users: authData.users.Username
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("users", authData.users.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get(`https://glacial-shore-06302.herokuapp.com/movies`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.setState({ movies: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let { movies, users } = this.state;

    return (
      <Router>
        <div className="main-view">
          <NavBar users={users} />
          <Row className="justify-content-md-center">
            
          <Route
              exact
              path="/"
              render={() => {
                if (!users)
                  return (
                    <Col>
                      <LoginView onLoggedIn={(users) => this.onLoggedIn(users)} />
                    </Col>
                  ); return movies.map((m) => (
                  <Col md={4} key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                ));
              }}
            />

            <Route path="/register" render={() => {
              if (users) return <Redirect to="/" />    /* (!users) */
              return (
                <Col lg={8} md={8}>
                  <RegistrationView />
                </Col>
              );
            }}

            />
        

            <Route path="/movies/:id" render={({ match, history }) => {
              return (
                <Col md={8}>
                  <MovieView movie={movies.find(m => m._id === match.params.id)} onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
            />

            <Route path="/directors/:name" render={({ match, history }) => {
              return (
                <Col>
                  <DirectorView director={movies.find((m) => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
            />

            <Route path="/genres/:name" render={({ match, history }) => {
              return (
                <Col>
                  <GenreView genre={movies.find((m) => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
            />

            <Route path={`/users/${users}/movies/:movieId`} render={({ match, history }) => {
              if (!users) return <Redirect to={`/users/${users}`} />
              return (
                <Col md={8}>
                  <FavoritesView />
                </Col>
              );
            }}
            />

            <Route path={`/users/${users}`} render={({ match, history }) => {
              if (!users) return <Redirect to="/" />
              return (
                <Col md={8}>
                  <ProfileView movies={movies} users={users === match.params.Username} onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
            />

            <Route path={`/users/user-update/${users}`} render={({ match, history }) => {
              if (!users) return <Redirect to="/" />
              return (
                <Col>
                  <UpdateView users={users === match.params.Username} onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
            />

            <Route path={`/favorites-view/${users}`} render={({ match, history }) => {
              if (!users) return <Redirect to="/" />
              return (
                <Col>
                  <FavoritesView users={users === match.params.Username} onBackClick={() => history.goBack()} />
                </Col>
              );
            }}
            />

          </Row>
        </div>
      </Router>
    );
  }
}

