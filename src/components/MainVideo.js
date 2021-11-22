import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'
import { InfoDiv, MainDiv, MyIframe } from './styled'
import VideoList from './VideoList'


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
        <>
            <div className="row mainVideo">
                <a name="mainvideo"></a>
                {
                    state.mainVideo &&
                    <MainDiv>
                        <MyIframe src={videoSrc} frameborder="0" />
                        <InfoDiv>
                            <h3>{state.mainVideo.snippet.title}</h3>
                            <p>{state.mainVideo.snippet.description}</p>
                            <br />
                            <button className="btn btn-warning" onClick={() => agregarFavorito(state.mainVideo)}>Add to<i
                                className="far fa-star">
                            </i></button>

                        </InfoDiv>

                    </MainDiv>
                }
            </div>
            <VideoList />
        </>
    )
}
