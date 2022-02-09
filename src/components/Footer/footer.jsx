import { useContext } from "react";
import { ContextAPI } from "../Context/Context";

export default function Footer(){

    const { personagensInfo } = useContext(ContextAPI);

    return(
        <footer>
            <div className="footer__logo">
                <img src="logo-rm.png"></img>
            </div>
            <div className="footer__info">
                <ul>
                    <li>Number of characters { personagensInfo.count }</li>
                    <li>Number of pages { personagensInfo.pages }</li>                   
                </ul>
            </div>
            <div className="footer__feito">
                <p>Made by Pedro Souza</p>
            </div>
        </footer>
    )
}