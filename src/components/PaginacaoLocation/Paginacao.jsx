import React, { useContext } from "react";
import { ContextAPI } from "../Context/Context";
import "./Paginacao.css";

export default function Paginacao(){

   const { locationInfo, setUrlLocation } = useContext(ContextAPI);

    return(
        
        <div className="paginacao">
            {locationInfo.prev === null ? 
            <button className="prev" disabled>Prev</button> :
            <button 
            onClick={() => setUrlLocation(locationInfo.prev)}
            >
                Prev
            </button>
            }

            {locationInfo.next === null ? 
            <button className="next" disabled>Next</button> :
            <button 
            onClick={() => setUrlLocation(locationInfo.next)}
            >
                Next
            </button>
            }
        </div>
    
    )
}