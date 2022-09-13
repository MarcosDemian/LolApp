import React from 'react';
import style from './ChampionsList.module.css';
import { Link } from 'react-router-dom';

const ChampionsList = (props) => {
    const champions = props.champions;
    const currentId = props.id;

  return (
    <div className={style.global}>
      <div className={style.title}>
      <p>Elige tu</p>
      <h2>Campeón</h2>
      <span>
      Con más de 140 campeones, encontrarás el que se ajuste <br/>
      perfectamente a tu estilo de juego.
      Domina a uno o domínalos a <br/>todos.
      </span>
      </div>
      <div className={style.champions_list}>
        <ul>
          {champions.map((champion, index) => {
            const img = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
            const img2 = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
            const { lore, title, id} = champion;

            const selected = id === currentId;

            return ( 
              <Link to={`/characters/${id}`}>
              <li key={index}>
                <div className={style.li_image}>
                <img src={img} alt="champion"/>
                </div>
                  <span>{champion.name}</span>
              </li>
              </Link>
            ); 
          })}
        </ul>
    </div>
    <section className={style.Section5}>
    <button className={style.Descargar}><span>JUEGA GRATIS</span></button>
    </section>
    </div>  
  );
}

export default ChampionsList;