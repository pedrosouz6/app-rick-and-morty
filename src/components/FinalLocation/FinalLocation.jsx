import React, { useEffect, useState } from "react";
import { ContextAPI } from "../Context/Context";

import Location from "../Location/Location";
import FooterLocation from "../FooterLocation/footer";
import PaginacaoLocation from "../PaginacaoLocation/Paginacao";

export default function FinalEpisodio(){

    const [ urlLocation, setUrlLocation ] = useState("https://rickandmortyapi.com/api/location?page=1");
    const [ locationResults, setLocationResults ] = useState([]);
    const [ locationInfo, setLocationInfo ] = useState([]);

    useEffect( async () => {
        const requisicao = await fetch(urlLocation);
        const json = await requisicao.json();
        setLocationResults(json.results);
        setLocationInfo(json.info);
    }, [urlLocation]);

    return(
        <>
            <ContextAPI.Provider
            value={{
                locationInfo: locationInfo,
                locationResults: locationResults,
                setUrlLocation: setUrlLocation
            }}>
                
            <Location/>
            <PaginacaoLocation/>
            <FooterLocation/>

            </ContextAPI.Provider>
        </>
    )
}