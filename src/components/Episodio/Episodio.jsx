import { useContext } from "react";
import { ContextAPI } from "../Context/Context";
import "./Episodio.css";

export default function Episodio(){
    const { epResults } = useContext(ContextAPI);
    return(
        <>
            <h1 className="name_page">Episodes</h1>
            <section className="episodio__card">
                {epResults.map(item => (
                    <div key={item.id} className="ep__card">
                        <header className="ep__header">
                            <p>{item.name}</p>
                        </header>
                        <div className="ep__content">
                            <p> <strong>Episode</strong>  {item.episode}</p>
                            <p> <strong>Characters</strong> {item.characters.length}</p>
                        </div>
                        <div className="ep__footer">
                            <p>{item.air_date}</p> 
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}