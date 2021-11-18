import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'
import { MainDiv, VideoDiv, MyIframe, InfoDiv, VidInfoVid, FavBtn } from './styled'

export default function MainVideo() {
    const { state, setState } = useContext(DataContext)
    const [videoSrc, setVideoSrc] = useState(`https://www.youtube.com/embed`)
    let { id } = useParams()

    if (state.mainVideo === true) (
        setVideoSrc(`https://www.youtube.com/embed/${state.mainVideo.id.videoId}`
        )
    )
    useEffect(() => {
        if (state.mainVideo != null)
            setVideoSrc(`https://www.youtube.com/embed/${state.mainVideo.id.videoId}`)
    }, [state.mainVideo])

    const agregarFavorito = (vid) => {
        state.favoritos.find((el) => el === vid) ||
            setState({
                ...state,
                favoritos: [...state.favoritos, vid]
            })
        console.log(state.favoritos)
    }

    return (
        <MainDiv>
            {
                state.mainVideo &&
                <VidInfoVid>
                    <VideoDiv>
                        <MyIframe src={videoSrc} frameborder="0" />
                    </VideoDiv>
                    <InfoDiv>
                        <h3>{state.mainVideo.snippet.title}</h3>
                        <p>{state.mainVideo.snippet.description}</p>
                        <br />
                        <FavBtn onClick={() => agregarFavorito(state.mainVideo)}>Agregar a Favoritos</FavBtn>
                        <br />

                    </InfoDiv>
                </VidInfoVid>
            }
        </MainDiv>
    )
}
