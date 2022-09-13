import React, { useState } from "react";
import style from "./Seeker.module.css";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Seeker() {
    const [searchText, setSearchText] = useState("");
    const [playerData, setPlayerData] = useState({});
    const API_KEY="RGAPI-500df569-8c23-481e-b622-795b9f6cd1ff";

    function searchForPlayer(event){
        var APICallString = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
        axios.get(APICallString).then(function (response) {
            setPlayerData(response.data);
        }).catch(function (error) {
            console.log(error)
        });
    }

    console.log(playerData);

  return (
    <div className={style.App}>
        <NavBar/>
      <div className={style.Container}>
        <h2 className={style.Titulo}>Buscador de Invocador</h2>
        <input className={style.Buscador} type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button className={style.Boton} onClick={e => searchForPlayer(e)}>Buscar</button>
      
      {JSON.stringify(playerData) != "{}" ? 
        <>
        <div className={style.invocador}>
        <p className={style.Info}>{playerData.name}</p>
        <img className={style.Profile__Icon} src={"http://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        <div className={style.lvl}>
        <p className={style.Info}> Nivel: <br /> {playerData.summonerLevel}</p>
        </div>
        </div>
        </> 
        : 
        <><p className={style.Info}>¡Atencion!, Busca un nombre valido</p></>
      }
      </div>
      <div className={style.Foo}>
      <Footer/>
      </div>
    </div>
  );
}

export default Seeker;