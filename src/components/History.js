import React, { useContext } from 'react'
import { DataContext } from '../aplication/DataContext'
import { BoxHisDiv, FavBtn, HisDiv, MyH3, VidsBtn } from './styled'



export default function History() {
    const { state, setState } = useContext(DataContext)

    const agregarFavorito = (vid) => {
        state.favoritos.find((el) => el === vid) ||
            setState({
                ...state,
                favoritos: [...state.favoritos, vid]
            })
    }

    const handleVideoSelect = (vid) => {
        setState({
            ...state,
            mainVideo: vid,
        })
    }

    return (
        <>
            <h3 style={{ marginLeft: "200px" }} >History</h3>
            <HisDiv>
                {
                    state.viewedHistory != null ? state.viewedHistory.map(vid => {
                        if (state.viewedHistory.indexOf(vid) < 10) {
                            return (
                                <BoxHisDiv key={vid.id.videoId} >
                                    <VidsBtn onClick={() => handleVideoSelect(vid)} >
                                        <img src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
                                    </VidsBtn>
                                    <MyH3 >{vid.snippet.title}</MyH3>
                                    <FavBtn onClick={() => agregarFavorito(vid)}>Agregar a Favoritos</FavBtn>

                                </BoxHisDiv>)
                        }
                    })
                        : ""
                }
            </HisDiv>
        </>
    )
}
