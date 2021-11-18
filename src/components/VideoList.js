import React, { useContext, useState } from 'react'
import { DataContext } from '../aplication/DataContext'
import { BoxVidDiv, FavBtn, MyH3, VidListDiv, VidsBtn } from './styled'



export default function VideoList() {
    const { state, setState } = useContext(DataContext)


    const handleVideoSelect = (vid) => {
        setState({
            ...state,
            mainVideo: vid,
        })
    }
    const agregarFavorito = (vid) => {

        state.favoritos.find((el) => el === vid) ||
            setState({
                ...state,
                favoritos: [...state.favoritos, vid]
            })
        console.log(state.favoritos)
    }

    return (
        <VidListDiv>
            {state.videos && state.videos.map((vid) => {
                if (vid !== state.videos[0]) {
                    return (
                        <BoxVidDiv key={vid.id.videoId} >
                            <VidsBtn onClick={() => handleVideoSelect(vid)} >
                                <img src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
                            </VidsBtn>
                            <MyH3 >{vid.snippet.title}</MyH3>
                            <FavBtn onClick={() => agregarFavorito(vid)}><i id={vid.id.videoId}
                                className="far fa-star">
                            </i>Agregar a Favoritos</FavBtn>
                        </BoxVidDiv>
                    )
                }
            })
            }
        </VidListDiv >
    )
}
