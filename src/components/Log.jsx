import React from 'react';
import {Link} from 'react-router-dom';
import style from "./Log.module.css"

const Log = () => {
  return (
    <div className={style.container}>
      <div className={style.login}>
        <div className={style.logo}>
        <svg fill="#D0A85C" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" 
        width="50px" height="50px"><path d="M9 7.25L9 22.75 6.875 26 21.958 26 25 22 14 22 14 4 7 4z"/>
        <path d="M7 19.105C6.365 17.872 6 16.479 6 15s.365-2.872 1-4.105V7.816L6.874 7.612C5.095 9.567 4 12.155 4 15c0 2.837 1.089 5.418 2.858 7.371L7 22.154V19.105zM16 6.059c4.493.499 8 4.316 8 8.941 0 1.849-.562 3.569-1.522 5h2.307C25.556 18.498 26 16.801 26 15c0-5.728-4.402-10.442-10-10.949V6.059z"/>
        </svg>
        </div>
        <h2>Bienvenido a <br /> League Of Legends</h2>
        <Link to="/home">
        <div className={style.boton}>
        <button></button>
        </div>
        </Link>
        <div className={style.copy}>
        <p>
          ™ &amp; © 2022 Riot Games Inc. Todos los derechos reservados. 
          Riot Games, League of Legends y PvP.net son marcas comerciales, 
          marcas de servicios o marcas registradas de Riot Games, Inc.
        </p>
        </div>
      </div>

      <div className={style.image}>
      </div>
    </div>
  )
};

export default Log;
