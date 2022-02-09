import { useEffect, useState } from "react";
import { ContextAPI } from "../Context/Context";

//Importando o componente
import Cards from "../CardsPersonagem/Cards";
import Footer from "../Footer/footer";

export default function FinalPersonagem(){

    const [ apiPersonagem, setApiPersonagem ] = useState
    ("https://rickandmortyapi.com/api/character?page=1");

    const [ personagensResults, setPersonagensResults ] = useState([]);

    const [ personagensInfo, setPersonagensInfo] = useState([]);
 
    useEffect( async () => {
        const requisicao = await fetch(apiPersonagem);
        const json = await requisicao.json();
        setPersonagensResults(json.results);
        setPersonagensInfo(json.info);
    }, [apiPersonagem])

    return(
        <>
            <ContextAPI.Provider 
            value={{
                personagensInfo: personagensInfo,
                personagensResults: personagensResults,
                setApiPersonagem: setApiPersonagem,
                apiPersonagem: apiPersonagem
            }}>
            
            {
                //div center para centralizar o conteudo dentro de um container
            }
            <div className="center">
                <Cards/>
            </div>

            <Footer/>
            </ContextAPI.Provider>
        </>
    )
}