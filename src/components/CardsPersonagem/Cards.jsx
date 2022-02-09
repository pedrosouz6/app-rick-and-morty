import React, { useContext } from "react";
import "./Cards.css";
import { ContextAPI } from "../Context/Context";
import Paginacao from "../PaginacaoPersonagem/Paginacao";

export default function Cards(){

    const { personagensResults } = useContext(ContextAPI);

    return(
        <>
            <h1 className="name_page">List of Characters</h1>
            <section className="container__cards"> 
                {personagensResults.map((item) => (
                    <div className="cards" key={item.id}>
                        <div className="card__img">
                            <img key={item.id} src={item.image}></img>
                        </div>
                        <div className="card__personagens">
                            <header className="card__header">
                                <h2>{item.name}</h2>
                                <p> <span className={item.status}></span> {item.status} - {item.species} </p>
                            </header>
                            <div className="card__gender">
                                <p><strong>Gender</strong> <span className={item.gender}></span> {item.gender}</p>
                            </div>
                            <p><strong>Location</strong> {item.location.name}</p>
                            <p><strong>Origin</strong> {item.origin.name}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Paginacao/>
        </>
    )
}