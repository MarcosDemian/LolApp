import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Footer from './Footer';
import style  from "./Characters.module.css"
import NavBar from './NavBar';

export const Characters = () => {
  const [champions, setChampions] = useState(null)
  const params = useParams()

  const createChampionsArray = (response, keys) => {
    const champions = keys.map((key) => {
        return response[key];
    });
    return champions
  };

  const getIndividualInfo =  (champions) => {
    const champs = champions.map(async (champion) => {
        try {
          const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.16.1/data/es_AR/champion/${champion.id}.json`)
          const indChamp = await response.json();
          const data = indChamp.data[champion.id]

            return {
                ...champion,
                ...data
              }
        } catch (error) {
            return {
                ...champion
            }
        }
    });
    return Promise.all(champs);
  }

  const getAllChampions = async (id, state) => {

    try {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.16.1/data/es_AR/champion/${id}.json`);

        const responseData = await response.json();
        
        const championsData = responseData.data;
        
        const championsArr = createChampionsArray(championsData, Object.keys(championsData));
            
        const champion = await getIndividualInfo(championsArr);
        
        setChampions(champion);

    } catch (error) {
        console.log(error.message);

        
    }
  };

  useEffect(() =>{
    getAllChampions(params.id, setChampions)
  }, [])

  return (
    <>
    {champions !== null ? (
      <div>
        {champions.map ((champion) => {
          const img2 = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
          return(
            <>
            <NavBar/>
            <div className={style.global}>  
            <div className={style.cont_img1}>
              <img src= {img2} />
              <div className={style.cont_img2}>
                <img src={img2} />
              </div>
            </div>
            <div className={style.content}>
              <div className={style.cont_titl}>
              <h3>{champion.title}</h3>
              <h2>{champion.name}</h2>
              <div>
              <p>{champion.lore}</p>
              </div>
              </div>
            </div>
            </div>
            <section className={style.Section5}>
            <button className={style.Descargar}><span>JUEGA GRATIS</span></button>
            </section>
            <Footer/>
            </>
          )
        })}
      </div>
    ) : ("no hay personaje")}
    </>
  )
};

export default Characters;
