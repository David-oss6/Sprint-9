import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'



export default function Cabecera() {
    const [text, setText] = useState()
    const { state, setState } = useContext(DataContext)

    const mostrarLocal = () => {
        const c = localStorage.getItem("data")
        c ? console.log(JSON.parse(c)) : console.log("Vacio")
        console.log(state)
    }

    const handleSubmit = async (e) => {
        const d = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${e}&key=AIzaSyCB1SYr-o4NWPVjjTEBakEOfK704xP7JNs`)
        const res = d.data.items;
        if (state.viewedHistory !== res) {
            if (state.viewedHistory.length === 10) {
                const list = state.viewedHistory.splice(0, 2)

            }
            setState({
                ...state,
                mainVideo: res[0],
                videos: res,
                viewedHistory: [...state.viewedHistory, res[0], res[1]]
            })

        }

    }

    return (
        <>
            <div className="searchBar"  >
                <input className="search-input" onChange={(event) => setText(event.target.value)} placeholder="Search" type="text" />
                <Link to="/">
                    <button className="searchBtn" onClick={(e) => handleSubmit(text)}><i className="fas fa-search search-i"></i></button>
                </Link>
                <button onClick={() => mostrarLocal()}>ConsoleLog State</button>
            </div>
            <ul className="menu" >
                <li  ><Link to="/">
                    <button className="menu-button" >
                        <i className="fas fa-align-center menu-i"></i>Home
                    </button>
                </Link>
                </li>
                <li><Link to="/related-videos">
                    <button className="menu-button" >
                        < i className="fas fa-buffer menu-i"></i>Recomended
                    </button>
                </Link>
                </li>
                <li><a href="#historial">
                    <button className="menu-button" >
                        <i className="fas fa-history menu-i"></i>History
                    </button>
                </a>
                </li>

                <li>
                    <a href="#favoritos">
                        <button className="menu-button" >
                            <i className="far fa-star menu-i"></i>Favourites
                        </button>
                    </a>

                </li>
            </ul>
        </ >
    )
}
