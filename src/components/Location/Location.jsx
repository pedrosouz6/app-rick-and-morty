import { useContext } from "react";
import { ContextAPI } from "../Context/Context";

export default function Location(){
    const { locationResults } = useContext(ContextAPI);
    return(
        <>
            <h1 className="name_page">Location</h1>
            <section className="episodio__card">
                {locationResults.map(item => (
                    <div key={item.id} className="ep__card">
                        <header className="ep__header">
                            <p>{item.name}</p>
                        </header>
                        <div className="ep__content">
                            <p> <strong>Type</strong>  {item.type}</p>
                            <p> <strong>Dimension</strong> {item.dimension}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}