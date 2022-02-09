import "./App.css";
import FinalPersonagem from "./components/FinalPersonagem/FinalPersonagem";
import FinalEpisodio from "./components/FinalEpisodio/FinalEpisodio";
import Header from "./components/Header/Header";
import FinalLocation from "./components/FinalLocation/FinalLocation";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){

  return(

    <main>
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<FinalPersonagem/>} />
            <Route path="/episodios" element={<FinalEpisodio/>} />
            <Route path="/localizacao" element={<FinalLocation/>} />
          </Routes>
        </Router>
    </main>
      
    )
    
}