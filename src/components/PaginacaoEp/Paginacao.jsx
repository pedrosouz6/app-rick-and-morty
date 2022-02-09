import React, { useContext } from "react";
import { ContextAPI } from "../Context/Context";
import "./Paginacao.css";

export default function Paginacao(){

   const { epInfo, setUrlEp } = useContext(ContextAPI);

    return(
        
        <div className="paginacao">
            {epInfo.prev === null ? 
            <button className="prev" disabled>Prev</button> :
            <button 
            onClick={() => setUrlEp(epInfo.prev)}
            >
                Prev
            </button>
            }

            {epInfo.next === null ? 
            <button className="next" disabled>Next</button> :
            <button 
            onClick={() => setUrlEp(epInfo.next)}
            >
                Next
            </button>
            }
        </div>
    
    )
}