
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'
import { FavDiv, FavImg, FavItemDiv } from './styled'

export default function Favorito() {
    const { state, setState } = useContext(DataContext)

    const handleVideoSelect = (vid) => {
        setState({
            ...state,
            mainVideo: vid,
        })
    }

    const quitarFavorito = (vid) => {
        const newArray = state.favoritos.filter((el) => {
            return el !== vid
        })
        setState({
            ...state,
            favoritos: newArray
        })
    }

    return (
        < >
            <h2  >Favoritos - {state.favoritos ? state.favoritos.length : "0"}</h2>
            <a name="favoritos"></a>
            <FavDiv>
                {
                    state.favoritos ? state.favoritos.map((vid) => (
                        <FavItemDiv >
                            <Link to="/">
                                <button className="handleSubmitBtn" onClick={() => handleVideoSelect(vid)} >
                                    <a className="fav-a" href="#mainvideo">
                                        <FavImg src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
                                    </a>
                                </button>
                            </Link>
                            <button className="btn btn-success favBtn " onClick={() => quitarFavorito(vid)} >remove</button>
                        </FavItemDiv>
                    ))
                        : ""

                }

            </FavDiv>
        </>
    )
}
