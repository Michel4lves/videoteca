import MovieCard from "../components/MovieCard"
import PropTypes from 'prop-types';

import '../pages/MoviesGrid.css'

const MoviesContainer = ({ moviesList }) => {
    return (
        <div className="movies-container">
            {moviesList.length === 0 && <p>Carregando...</p>}
            {moviesList.length > 0 && moviesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

MoviesContainer.propTypes = {
    moviesList: PropTypes.object,
}

export default MoviesContainer