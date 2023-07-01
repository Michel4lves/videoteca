import { useState, useEffect } from "react"
import MoviesContainer from "../components/MoviesContainer"

import './MoviesGrid.css'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([])

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setUpcomingMovies(data.results)
    }

    useEffect(() => {
        const upcomingUrl = `${moviesUrl}upcoming?${apiKey}`
        getUpcomingMovies(upcomingUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Em breve:</h2>
            <MoviesContainer moviesList={upcomingMovies} />
        </div>
    )
}

export default Upcoming