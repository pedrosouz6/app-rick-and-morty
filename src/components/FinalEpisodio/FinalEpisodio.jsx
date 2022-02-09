import React, { useEffect, useState } from "react";
import { ContextAPI } from "../Context/Context";

import Episodio from "../Episodio/Episodio";
import Footer from "../FooterEp/footer";
import PaginacaoEp from "../PaginacaoEp/Paginacao";

export default function FinalEpisodio(){

    const [ urlEp, setUrlEp ] = useState("https://rickandmortyapi.com/api/episode?page=1");
    const [ epResults, setEpResults ] = useState([]);
    const [ epInfo, setEpInfo ] = useState([]);

    useEffect( async () => {
        const requisicao = await fetch(urlEp);
        const json = await requisicao.json();
        setEpResults(json.results);
        setEpInfo(json.info);
    }, [urlEp])

    return(
        <>
            <ContextAPI.Provider
            value={{
                epResults: epResults,
                epInfo: epInfo,
                setUrlEp: setUrlEp
            }}>

                <Episodio/>
                <PaginacaoEp/>
                <Footer/>

            </ContextAPI.Provider>
        </>
    )
}