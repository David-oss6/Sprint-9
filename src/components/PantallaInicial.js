import React, { useContext } from 'react'
import Recomended from './Recomended'




export default function PantallaInicial() {

    return (
        <>
            <div style={{ border: "2px #9AB3F5 solid", padding: "10px", borderRadius: "15px" }}>

                <h1>ReactTube</h1>
                <p>Please Log In to use The App.</p>

            </div>
            <Recomended />
        </>
    )
}
