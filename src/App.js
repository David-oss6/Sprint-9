
import Cabecera from "./components/Cabecera";
import History from "./components/History";
import Favorito from './components/Favorito'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PantallaInicial from "./components/PantallaInicial";
import { GlobalStyle } from "./components/styled";
import MainVideo from "./components/MainVideo";
import VideoList from "./components/VideoList";
import Presentacion from "./components/Presentacion";


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div style={{ backgroundColor: "#1F1D36" }} className="row">
          <div className="col-2 cabecera">
            <Cabecera />
          </div>

          <div className="col contenido">
            <Routes>

              <Route path="/" element={<MainVideo />} />
              <Route path="/" element={<VideoList />} />
              <Route exact path="/related-videos" element={<Presentacion />} />


            </Routes>
            <div className="row historial-favoritos " >
              <div className="col-6 bag1" >
                <History />
              </div>
              <div className="col-6 bag2">
                <Favorito />
              </div>
            </div>
          </div>

        </div>
      </div>
      <GlobalStyle />
    </Router >
  );
}

export default App;
