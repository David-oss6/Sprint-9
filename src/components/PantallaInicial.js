import React, { useContext } from 'react'
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";
import { AppDiv } from './styled'
import { DataContext } from '../aplication/DataContext';
import Presentacion from './Presentacion';

export default function PantallaInicial() {
    const { state } = useContext(DataContext)

    return (
        <>
            {
                state.mainVideo ? <AppDiv>
                    <MainVideo />
                    <VideoList />
                </AppDiv> : <Presentacion />
            }
        </>
    )
}
