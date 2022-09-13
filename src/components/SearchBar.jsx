/* import React from "react";
import {searchChamps} from "../api"; 
import style from "./SearchBar.module.css"
const {useState} = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [champ, setChamp] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const onClick = async (e) => {
    const data = await searchChamps(search);
    console.log(data)
    setChamp(data);
  }
  
  return (
    <div className={style.searchbar_container}>
      <div className={style.searchbar}>
        <input 
        placeholder="Filtrar"
        onChange={onChange}
         />
      </div>
      <div className={style.searchbar_btn}>
        <button onClick={onClick}>Buscar</button>
      </div>
      <div>
        { champ &&
        <div>
          <img src={champ.data[search].image.sprite} />
          <div>Nombre: {champ.data[search].name}</div>
        </div>
        }
        </div> 
    </div>
  );
};

export default Searchbar */