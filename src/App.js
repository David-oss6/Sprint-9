
import Cabecera from "./components/Cabecera";
import History from "./components/History";
import Favorito from './components/Favorito'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PantallaInicial from "./components/PantallaInicial";
import { GlobalStyle } from "./components/styled";

function App() {
  return (
    <Router>
      <div className="container col-2">

        <div className="col" >
          <Cabecera />
        </div>
        <div className="col" >
          <div className="row" >
            <Routes>
              <Route path="/" element={<PantallaInicial />} />
              <Route exact path="/history" element={<History />} />
              <Route exact path="/favoritos" element={<Favorito />} />

            </Routes>
          </div>
          <div className="row-2">
            <History />
            <Favorito />
          </div>
        </div  >

      </div>
      <GlobalStyle />
    </Router >
  );
}

export default App;


