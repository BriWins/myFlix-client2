import React from "react";

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
                {movies.map(movie => <div key={movie._id}>{movie.Title}</div>)}
            </div>
        );
    }
}

export default MainView;