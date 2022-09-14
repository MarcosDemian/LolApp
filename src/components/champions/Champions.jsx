import React, { Component, Fragment } from 'react';
import ChampionsList from "../ChampionsList/ChampionsList";
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import NavBar from '../NavBar';
import Footer from '../Footer';

class Champions extends Component {
  constructor() {
    super();

    this.state = {
        loading: false,
        champions: [],
        img: null,
        info: null,
        title: null,
        id: null,
        error: null
    };
  }

  createChampionsArray = (response, keys) => {
    const champions = keys.map((key) => {
        return response[key];
    });
    return champions
  };

  getIndividualInfo =  (champions) => {
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

  getAllChampions = async () => {
    this.setState({loading: true});

    try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/12.16.1/data/es_AR/champion.json');

        const responseData = await response.json();
        
        const championsData = responseData.data;
        
        const championsArr = this.createChampionsArray(championsData, Object.keys(championsData));
            
        const individuals = await this.getIndividualInfo(championsArr);
        //console.log(individuals);
    
        this.setState({
            champions: individuals,
            info: individuals[0].lore,
            img: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${individuals[0].id}_0.jpg`,
            title: individuals[0].title.toUpperCase(),
            id: individuals[0].id,
            loading: false
        });

    } catch (error) {
        console.log(error.message);

        this.setState({
            error: "Error fetching data",
            loading: false
        });
    }
  };

  handleClick = (info, img, title, id) => {
    //console.log(info);

    this.setState({
        info: info,
        img: img,
        title: title.toUpperCase(),
        id: id
    })
  }

  componentDidMount() {
    this.getAllChampions();
  }
    
  render(){
    const { champions, img, info, title, id, loading, error } = this.state;

    if (loading) {
        return(
            <Loader />
        )
    }

    if (error) {
        return(
            <Error error={error}/>
        )
    }

    return (
        <Fragment>
          <NavBar/>
            <ChampionsList 
              champions={champions} 
              handleClick={this.handleClick}
              id={id}
            />
            <Footer/>
        </Fragment>
    )
  }
}

export default Champions;