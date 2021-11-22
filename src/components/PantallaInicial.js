import React, { useContext } from 'react'
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";
import { DataContext } from '../aplication/DataContext';
import Presentacion from './Presentacion';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default function PantallaInicial() {
    const { state } = useContext(DataContext)

    return (
        <>



        </>
    )
}
