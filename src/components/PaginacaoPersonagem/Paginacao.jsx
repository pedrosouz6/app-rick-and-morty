import React, { useContext } from "react";
import { ContextAPI } from "../Context/Context";
import "./Paginacao.css";

export default function Paginacao(){

   const { personagensInfo, setApiPersonagem } = useContext(ContextAPI);

    return(
        
        <div className="paginacao">
            {personagensInfo.prev === null ? 
            <button className="prev" disabled>Prev</button> :
            <button 
            onClick={() => setApiPersonagem(personagensInfo.prev)}
            >
                Prev
            </button>
            }

            {personagensInfo.next === null ? 
            <button className="next" disabled>Next</button> :
            <button 
            onClick={() => setApiPersonagem(personagensInfo.next)}
            >
                Next
            </button>
            }
        </div>
    
    )
}