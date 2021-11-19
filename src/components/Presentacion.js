import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { DataContext } from '../aplication/DataContext'
import { FavBtn, MyH3, PresDiv, PresH3, PresIndividualDiv, VidsBtn } from './styled'

export default function Presentacion() {
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

        console.log(state)
    }

    const agregarFavorito = (vid) => {
        state.favoritos.find((el) => el === vid) ||
            setState({
                ...state,
                favoritos: [...state.favoritos, vid]
            })
        console.log(state.favoritos)
    }

    const h3style = {
        marginLeft: "200px",
    }

    return (
        <>
            <PresH3 >Recomended for you</PresH3>
            <PresDiv>
                {random && random.map((vid) => (
                    <PresIndividualDiv key={vid.id.videoId} >

                        <div  >
                            <VidsBtn onClick={() => handleVideoSelect(vid)} >
                                <img src={vid.snippet.thumbnails.default.url} />
                                <h3>{vid.snippet.title}</h3>
                            </VidsBtn>
                        </div>
                        <div>
                            <FavBtn onClick={() => agregarFavorito(vid)}>Agregar a Favoritos</FavBtn>

                        </div>
                    </PresIndividualDiv>
                ))
                }
            </PresDiv>
        </>
    )
}
