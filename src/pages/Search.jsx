import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MoviesContainer from "../components/MoviesContainer"

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css'

const Search = () => {

    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?query=${query}&${apiKey}`
        getSearchedMovies(searchWithQueryUrl)
    }, [query])

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <MoviesContainer moviesList={movies} />
        </div>
    )
}

export default Search