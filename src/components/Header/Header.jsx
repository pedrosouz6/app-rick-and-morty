import { useState } from "react";

import "./Header.css";

export default function Header(){

    const [ menuToggle, setMenuToggle ] = useState(false);

    return(
      
        <header id="header">
            <div className="center">
                <div className="header__header">
                    <div className="header__logo">
                        <a href="/"><img src="logo-principal.png" alt="Logo"/></a>
                    </div>
                    <nav className={menuToggle ? "toggle" : ""}>
                        <ul>
                            <li> <a href="/">Characters</a> </li>
                            <li> <a href="/episodios">Episode</a> </li>
                            <li> <a href="/localizacao">Location</a> </li>
                        </ul>
                        <button className="header_btn" onClick={() => setMenuToggle(!menuToggle)}></button>
                    </nav>
                </div>
            </div>
        </header>

    )
}