import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { DataContext } from '../aplication/DataContext'
import { PresDiv, VidListDiv } from './styled'
import { Link } from 'react-router-dom'

export default function Recomended() {
    const { state, setState } = useContext(DataContext)
    const [random, setRandom] = useState(null)

    useEffect(async () => {
        const texto = (Math.random().toString(15).substring(5, 9) + Math.random().toString(15).substring(2, 9))
        const text = texto.replace(/[0-9]/g, '');
        const r = await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${text}&key=AIzaSyCB1SYr-o4NWPVjjTEBakEOfK704xP7JNs`)
            .then((res) => { setRandom(res.data.items) })
    }, [])

    const handleVideoSelect = async (vid) => {
        console.log(vid)
        await axios(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${vid.id.videoId}&key=AIzaSyCB1SYr-o4NWPVjjTEBakEOfK704xP7JNs`)
            .then(res => setState({
                ...state,
                mainVideo: vid,
                videoList: res.data.items
            }))
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
        <div className="row presentacion-row">
            <div className="presentacion-div">
                <h2 >Recomended for you</h2>
                <VidListDiv>
                    {random && random.map((vid) => (
                        <PresDiv key={vid.id.videoId} >
                            <div  >
                                <Link to="/">
                                    <button className="handleSubmitBtn" onClick={() => handleVideoSelect(vid)} >
                                        <img className="related-img" src={vid.snippet.thumbnails.default.url} />
                                        <h3>{vid.snippet.title}</h3>
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <button className="btn btn-warning " onClick={() => agregarFavorito(vid)}>Add to<i
                                    className="far fa-star">
                                </i></button>

                            </div>
                        </PresDiv>
                    ))
                    }
                </VidListDiv>
            </div>
        </div>
    )
}
