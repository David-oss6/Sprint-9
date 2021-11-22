import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../aplication/DataContext'
import { HisDiv, HisImg } from './styled'

export default function History() {
    const { state, setState } = useContext(DataContext)



    const handleVideoSelect = (vid) => {
        setState({
            ...state,
            mainVideo: vid,
        })
    }

    return (
        < >
            <h2>History</h2>
            <a name="historial"></a>
            <HisDiv>
                {
                    state.viewedHistory != null ? state.viewedHistory.map(vid => {
                        if (state.viewedHistory.indexOf(vid) < 10) {
                            return (
                                <div style={{ margin: "5px" }} key={vid.id.videoId} >
                                    <Link to="/">
                                        <button className="handleSubmitBtn" onClick={() => handleVideoSelect(vid)} > <a className="fav-a" href="#mainvideo">
                                            <HisImg title={vid.snippet.title} src={vid.snippet.thumbnails.default.url} alt={vid.snippet.title} />
                                        </a>
                                        </button>
                                    </Link>
                                </div>)
                        }
                    })
                        : ""
                }
            </HisDiv>
        </>
    )
}
