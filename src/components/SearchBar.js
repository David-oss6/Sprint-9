import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'
import Registro from './Registro'

export default function SearchBar() {
    const [text, setText] = useState()
    const { state, setState } = useContext(DataContext)
    const [inList, setInList] = useState(false)
    const mostrarLocal = () => {
        const c = localStorage.getItem("data")
        c ? console.log(JSON.parse(c)) : console.log("Vacio")
        console.log(state)
    }
    const handleSubmit = async (e) => {
        setInList(false)
        const d = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${e}&key=AIzaSyCB1SYr-o4NWPVjjTEBakEOfK704xP7JNs`)
        const res = d.data.items;

        res.map(element => {
            state.viewedHistory.find((vid) => vid === element)
            setInList(true)

        });

        if (state.viewedHistory.length === 10) {
            const list = state.viewedHistory.splice(0, 2)
        }
        if (inList === false) {
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
                <Registro />
                {/* <button onClick={() => mostrarLocal()}>ConsoleLog State</button> */}
            </div>
        </>
    )
}
