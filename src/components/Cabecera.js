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



    const style = {
        marginRight: "5px",
        backgroundColor: "#024274"
    }

    return (
        <div style={{ display: "flex" }}>
            <SideDiv>
                <ul  >MENU</ul>
                <li>
                    <Link to="/"> <MyBtn >
                        <i style={style} className="fas fa-align-center"></i>Home
                    </MyBtn></Link>
                </li>
                <li>
                    <Link to="/history"><MyBtn >
                        <i style={style} className="fas fa-history"></i>History
                    </MyBtn></Link>
                </li>
                <li>
                    <Link to="/linked"> <MyBtn >
                        < i style={style} className="fas fa-buffer"></i>Linked Videos
                    </MyBtn></Link>
                </li>
                <li>
                    <Link to="/favoritos"> <MyBtn ><i style={style} className="far fa-heart"></i>Saved Videos</MyBtn></Link>
                </li>
            </SideDiv>
            <SearchDiv>
                <button onClick={() => mostrarLocal()}>ConsoleLog LocalStorage</button>

                <br />
                <MyInput onChange={(event) => setText(event.target.value)} placeholder="Search" type="text" />
                <button onClick={(e) => handleSubmit(text)}><i className="fas fa-search"></i></button>
            </SearchDiv>
        </div>
    )
}
