import { Link } from "react-router-dom"

import { FaStar } from 'react-icons/fa'

import './MovieCard.css'

const imageUrl = import.meta.env.VITE_IMG

import PropTypes from 'prop-types';


const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                {movie.release_date.split('-')[0]}
            </p>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    showLink: PropTypes.bool,
};

export default MovieCard