import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

import './Navbar.css'

import roll from "../img/roll.gif"

const Navbar = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <nav id="navbar">
            <div className="nav-header">
                <h2>
                    <Link to='videoteca/'>
                        <BiCameraMovie /> 
                        Vide
                        <img src={roll} alt='roll_logo' className={roll}/>
                        teca
                    </Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Busque um filme" 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search}
                    />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to='videoteca/'>Últimos Lançamentos</Link>
                    </li>
                    <li>
                        <Link to='videoteca/bestmovies'>Melhores Filmes</Link>
                    </li>
                    <li>
                        <Link to='videoteca/upcoming'>Em Breve</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
