import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'
import { MyBtn, MyInput, SearchDiv, SideDiv } from './styled'

export default function Cabecera() {
    const [text, setText] = useState()
    const { state, setState } = useContext(DataContext)

    const mostrarLocal = () => {
        const c = localStorage.getItem("data")
        c ? console.log(JSON.parse(c)) : console.log("Vacio")
        console.log(state)
    }

    const handleSubmit = async (e) => {
        var f = [];
        if (state.viewedHistory.length === 10) {
            f = state.viewedHistory;
            f = f.splice(0, 2)
            setState({
                ...state,
                viewedHistory: [f]
            })
        }

        const d = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${e}&key=AIzaSyCB1SYr-o4NWPVjjTEBakEOfK704xP7JNs`)
        const res = d.data.items;
        setState({
            ...state,
            mainVideo: res[0],
            videos: res,
            viewedHistory: [...state.viewedHistory, res[0], res[1]]
        })

    }

    const mostrarAxios = async () => {
        await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${text}&key=AIzaSyCB1SYr-o4NWPVjjTEBakEOfK704xP7JNs`)
            .then((res) => console.log(res))
    }

    const style = {
        marginRight: "5px",
        backgroundColor: "#024274"
    }

    return (
        <div style={{ display: "flex" }}>
            <SideDiv>
                <p style={{ fontSize: "30px", color: "white", marginLeft: "25px" }} >MENU</p>
                <Link to="/"> <MyBtn style={{ fontSize: "20px" }}>
                    <i style={style} className="fas fa-align-center"></i>Home
                </MyBtn></Link>
                <Link to="/history"><MyBtn style={{ fontSize: "20px" }}>
                    <i style={style} className="fas fa-history"></i>History
                </MyBtn></Link>
                <Link to="/linked"> <MyBtn style={{ fontSize: "20px" }}>
                    < i style={style} className="fas fa-link"></i>Linked Videos
                </MyBtn></Link>
                <Link to="/favoritos"> <MyBtn style={{ fontSize: "20px" }}><i style={style} className="far fa-heart"></i>Saved Videos</MyBtn></Link>
            </SideDiv>
            <SearchDiv>
                <button onClick={() => mostrarLocal()}>ConsoleLog LocalStorage</button>
                <button onClick={() => mostrarAxios()}>Log Axios</button>
                <br />
                <MyInput onChange={(event) => setText(event.target.value)} placeholder="Search" type="text" />
                <button onClick={(e) => handleSubmit(text)}><i className="fas fa-search"></i></button>
            </SearchDiv>
        </div>
    )
}
