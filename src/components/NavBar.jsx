import React from "react";
import style from "./NavBar.module.css";
import riot from "../images/puño.png"
import lol from "../images/loll.png"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function NavBar(){
    return(
        <div className={style.Sticky}>
            <div className={style.Container}>
            <div className={style.Iconos}>
            <img className={style.Riot} src={riot} />
            <hr/>
            <img className={style.Lol} src={lol} />
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