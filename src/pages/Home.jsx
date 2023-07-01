import { useState, useEffect } from "react"
import MoviesContainer from "../components/MoviesContainer"

import './MoviesGrid.css'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [nowMovies, setNowMovies] = useState([])

    const getNowPlayingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setNowMovies(data.results)
    }

    useEffect(() => {
        const nowPlayingUrl = `${moviesUrl}now_playing?${apiKey}`
        getNowPlayingMovies(nowPlayingUrl)
    }, [])

    return (
        <div className="container">
            <h2 className="title">Últimos lançamentos:</h2>
            <MoviesContainer moviesList={nowMovies} />
        </div>
    )
}

export default Home