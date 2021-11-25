
import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <ul className="menu" >

                <li  ><Link to="/">
                    <button className="menu-button" >
                        <i className="fas fa-align-center menu-i"></i>Home
                    </button>
                </Link>
                </li>
                <li><Link to="/recomended">
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
