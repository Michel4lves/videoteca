import { useState, useEffect } from "react"
import MoviesContainer from "../components/MoviesContainer"

import './MoviesGrid.css'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const BestMovies = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <MoviesContainer moviesList={topMovies} />
        </div>
    )
}

export default BestMovies