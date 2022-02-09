import { useContext } from "react";
import { ContextAPI } from "../Context/Context";

export default function Footer(){

    const { locationInfo } = useContext(ContextAPI);

    return(
        <footer>
            <div className="footer__logo">
                <img src="logo-rm.png"></img>
            </div>
            <div className="footer__info">
                <ul>
                    <li>Number of location { locationInfo.count }</li>
                    <li>Number of pages { locationInfo.pages }</li>                   
                </ul>
            </div>
            <div className="footer__feito">
                <p>Made by Pedro Souza</p>
            </div>
        </footer>
    )
}