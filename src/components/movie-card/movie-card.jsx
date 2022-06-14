import React from "react";
import PropTypes from "prop-types";


class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return <div className="movie-card" onClick={() => {onMovieClick(movie); }}>{movie.Title}</div>;    
    }
}

MovieCard.PropTypes = {
    movie: PropTypes.shape({
        ImgPath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ReleaseDate: PropTypes.number.isRequired,
        Featured: PropTypes.bool,
        Ratings: PropTypes.string.isRequired,
        Actors: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        }).isRequired,
        onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;