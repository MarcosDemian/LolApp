import React from "react";
import style from "./NavBar.module.css";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function NavBar(){
    return(
        <div className={style.Sticky}>
            <div className={style.Container}>
            <div className={style.Iconos}>
            <img className={style.Riot} src="https://i.imgur.com/d7gxxct.png" />
            <hr/>
            <img className={style.Lol} src="https://i.imgur.com/sItL8My.png" />
            </div>
            <div className={style.Links}>
                <Link to="/home">
                <p className={style.li}>Informacion del Juego</p>
                </Link>
                <Link to="/characters">
                <p className={style.li}>Campeones</p>
                </Link>
                <Link to="/seeker">
                <p className={style.li}>Buscador De Invocador</p>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default NavBar;