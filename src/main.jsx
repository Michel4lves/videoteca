import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import BestMovies from './pages/BestMovies.jsx'
import Upcoming from './pages/Upcoming.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route path='/' element={<Home />} />
                        <Route path='bestmovies' element={<BestMovies />} />
                        <Route path='upcoming' element={<Upcoming />} />
                        <Route path='movie/:id' element={<Movie />} />
                        <Route path='search' element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    </React.StrictMode>,
)
