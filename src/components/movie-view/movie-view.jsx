import React from "react";

class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImgPath} crossorigin="anonymous" />
                </div>
                <div className="movie-title">
                    <span  className="label">Title: </span>
                    <span  className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span  className="label">Description: </span>
                    <span  className="value">{movie.Description}</span>
                </div>
                <div className="movie-release">
                    <span className="label">Theater Release Date: </span>
                    <span className="value">{movie.ReleaseDate}</span>
                </div>
                <div className="movie-rating">
                    <span className="label">Rating: </span>
                    <span className="value">{movie.Rating}</span>
                </div>
                <div className="movie-director">
                    <span className="label">Director: </span>
                    <span className="value">{movie.Director}</span>
                </div>
                <div className="movie-genre">
                    <span className="label">Genre: </span>
                    <span className="value">{movie.Genre}</span>
                </div>
                <div className="movie-actors">
                    <span className="label">Actors: </span>
                    <span className="value">{movie.Actors}</span>
                </div>
                <div className="movie-feature">
                    <span className="label">Featured Movie?: </span>
                    <span className="value">{movie.Featured}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back</button>
            </div>
        );
    }
}

export default MovieView;