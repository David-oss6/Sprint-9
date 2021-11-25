import React, { useContext, useState } from 'react'
import { DataContext } from '../aplication/DataContext'
import { BoxVidDiv, VidListDiv } from './styled'



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
    }

    return (
        <div className="row ">
            <h2>Related Videos</h2>
            <VidListDiv>
                {state.videos && state.videos.map((vid) => {
                    if (vid !== state.videos[0]) {
                        return (
                            <BoxVidDiv key={vid.id.videoId} >
                                <div>
                                    <button className="handleSubmitBtn" onClick={() => handleVideoSelect(vid)} >
                                        <img className="related-img" src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
                                    </button>
                                    <h3 >{vid.snippet.title}</h3>
                                </div>
                                <button className="btn btn-warning bg-pill pe-2 ps-2" onClick={() => agregarFavorito(vid)}>Add to<i
                                    className="far fa-star">
                                </i></button>
                            </BoxVidDiv>
                        )
                    }
                })
                }

            </VidListDiv >


        </div>
    )
}
