import axios from "axios";
import React, { useEffect, useContext } from "react";

import { DataContext } from "../aplication/DataContext";
import { BoxHisDiv, FavBtn, HisDiv, MyH3, VidsBtn } from "./styled";

export default function Favorito() {
  const { state, setState } = useContext(DataContext);

  const handleVideoSelect = (vid) => {
    setState({
      ...state,
      mainVideo: vid,
    });
  };

  const quitarFavorito = (vid) => {
    const newArray = state.favoritos.filter((el) => {
      return el !== vid;
    });
    setState({
      ...state,
      favoritos: newArray,
    });
  };

  return (
    <>
      <h3 style={{ marginLeft: "200px" }}>Favoritos</h3>
      <HisDiv>
        {state.favoritos
          ? state.favoritos.map((vid) => (
              <BoxHisDiv key={vid.id.videoId}>
                <VidsBtn onClick={() => handleVideoSelect(vid)}>
                  <img
                    src={vid.snippet.thumbnails.default.url}
                    alt={vid.snippet.title}
                  />
                  <MyH3>{vid.snippet.title}</MyH3>
                </VidsBtn>
                <FavBtn onClick={() => quitarFavorito(vid)}>
                  Quitar de Favoritos
                </FavBtn>
              </BoxHisDiv>
            ))
          : ""}
      </HisDiv>
    </>
  );
}
