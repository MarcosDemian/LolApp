import React from "react";
import style from "./Listchamps.module.css"

const Listchamps = (props) => {
  const champions = props.champions;
  const currentId = props.id;

  return(
    <div>
      <div className={style.header}>
        <h1>Campeones</h1>
      </div>
      <div className={style.champs_grid}>

            <ul>
    {champions.map((champion, index) => {
          const img = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
            const { lore, title, id} = champion;

            const selected = id === currentId;
              return(
                <li className={selected ? "selected": null} key={index} onClick={() => props.handleClick(lore, img, title, id)}>
                  <div className='li-image'>
                  <img src={img} alt="champion"/>
                  </div>
                  <div className='li-name'>
                  <span>{champion.name}</span>
                  </div>
              </li>
              )
            })}
            </ul>
      </div>
    </div>
  );
};

export default Listchamps;