import React from "react";
import MovieCard from "../movie-card/movie-card";

class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    render(){
        const { movies } = this.state;

        if (movies.length ===0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {movies.map(movie => <MovieCard key={movie._id} movieData={movie}/>)}
            </div>
        );
    }
}

export default MainView;