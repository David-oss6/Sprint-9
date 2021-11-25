
import Cabecera from "./components/Menu";
import History from "./components/History";
import Favorito from './components/Favorito'
import {
  BrowserRouter as Router,

  Switch,
  Route
} from "react-router-dom";

import PantallaInicial from "./components/PantallaInicial";
import { GlobalStyle } from "./components/styled";
import MainVideo from "./components/MainVideo";
import VideoList from "./components/VideoList";
import Recomended from "./components/Recomended";
import SearchBar from "./components/SearchBar";
import PrivateRoute from "./components/PrivateRoute";
import Menu from "./components/Menu";


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row main-row">
          <div className="col-2 cabecera">
            <Menu />
          </div>
          <div className="col contenido">
            <SearchBar />
            <Switch>

              <Route path="/pantalla-inicial" component={PantallaInicial} />
              <PrivateRoute path="/recomended" component={Recomended} />
              <PrivateRoute exact path="/" component={MainVideo} />


            </Switch>
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
