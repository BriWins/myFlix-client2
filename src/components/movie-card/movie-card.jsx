import React from "react";


class MovieCard extends React.Component {
    render() {
        const { movieData } = this.props;
        return <div className="movie-card">{movie.Title}</div>;    
    }
}

export default MovieCard;