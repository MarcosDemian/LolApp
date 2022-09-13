import React from "react";
import Footer from "./Footer";
import style from "./Home.module.css";
import NavBar from "./NavBar";
import Logo from "../images/LOLoficial.webp"
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import discord from "../images/discord.png";
import divider from "../images/divider.png";
import sett from "../images/champion-sett.webp";
import graves from "../images/tf-graves-pride-banner.webp";
import grieta from "../images/Summoner.webp";
import Tft from "../images/Teamfight_Tactics.webp";
import aram from "../images/Abyss.webp";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";



window.addEventListener('scroll', function()  {
    let element = document.getElementById('scroll-content');
    let screenSize = window.innerHeight;
    
    if(element.getBoundingClientRect().top < screenSize) {
        element.classList.add(style.visible);
    } else {
        element.classList.remove(style.visible);
    }
});


function Home () {
    return(
<div className={style.Container}>
    <NavBar/>
    <section className={style.Section1}>
        <div className={style.Titulo}>
            <img className={style.Lol} src={Logo} />
        </div>
    </section>

    <section className={style.Section2_5}>
            <div className={style.Bar}>
                <div className={style.Cont_Bar}>
                <div className={style.Txt}>
                    ÚNETE A NUESTRAS REDES SOCIALES
                </div>
                <div className={style.Icons}>
                    <a className={style.Alink} href="https://www.instagram.com/juegalol/">
                    <img src={instagram} />
                    </a>
                    <a className={style.Alink} href="https://discordapp.com/invite/riotgameslatam">
                    <img src={discord} />
                    </a>
                    <a className={style.Alink} href="https://twitter.com/lollatam">
                    <img src={twitter} />
                    </a>
                    <a className={style.Alink} href="https://www.facebook.com/LeagueofLegendsLatino/">
                    <img src={facebook} />
                    </a>
                    <a className={style.Alink} href="https://www.youtube.com/user/RiotGamesLatino/">
                    <img src={youtube} />
                    </a>
                </div>
                </div>
            </div>
    </section>
            
    <div className={style.Modos}>
        <div>
            <h3 className={style.Cabeza}>Últimas Noticias</h3>
        </div>
        <div className={style.Deco}>
            <img className={style.Divi} src={divider} />
        </div>
    </div>

    <section id="scroll-content" className={style.Section2}>
    <ul className={style.CNoticias}>
        <li className={style.Noticias}>
            <div className={style.FotoN}>
                <img className={style.FotosN} src={sett}/>
            </div>
            <div className={style.TituloN}>
                <div className={style.TituloC}>
                <h3 className={style.Titulos}>CONVIÉRTETE EN EL JEFE</h3>
                <p>
                Analiza todos los campeones, elige el que más te guste para combatir 
                y conviértete en el jefe de la arena
                </p>
                </div>
            </div>
        </li>
        <li className={style.Noticias}>
            <div className={style.FotoN}>
                <img className={style.FotosN} src={graves}/>
            </div>
            <div className={style.TituloN}>
                <div className={style.TituloC}>
                    <h3 className={style.Titulos}>"LOS CHICOS BOMBOLINI", POR JARED ROSEN</h3>
                </div>
            </div>
        </li>
    </ul>
    </section>

    <section className={style.Section6}>
        <div className={style.Content6}>
          <Link to="/characters">
          <div>
            <p className={style.subTC}>Miles de</p>
            <h3 className={style.TitC}>Campeónes</h3>
            </div>
          </Link>
        </div>
    </section>
        
    <div className={style.space}></div>

    <section className={style.Section7}>
        <div  className={style.Guia2}>
        <h4>MODOS DE JUEGO ▬</h4>
        </div>
        <div className={style.CardsC}>
            <ul className={style.Ccards}>
                <li className={style.Cards}>
                <div className={style.CardfondoG}>
                <img className={style.icono} src={grieta}/>
                <h3 className={style.modo}>Grieta Del <br /> Invocador</h3>
                <p className={style.Rt}>EL MODO DE JUEGO MÁS POPULAR </p>
                <p className={style.resu}>
                Despeja tu carril, sumérgete en batallas épicas en equipo de 5v5 
                y destruye el nexo enemigo antes de que destruyan el tuyo.
                </p>
                </div>
                </li>
                <li className={style.Cards}>
                <div className={style.CardfondoA}>
                <img className={style.icono} src={aram}/>
                <h3 className={style.modo}>ARAM</h3>
                <p className={style.Rt}>Campeones aleatorios en un solo carril </p> 
                <p className={style.resu}>
                Pelea a lo largo de un puente congelado mientras tu equipo de campeones aleatorios 
                se dirige hacia el nexo enemigo en este caótico y divertido modo de juego de 5v5.
                </p>
                </div>
                </li>
                <li className={style.Cards}>
                <div className={style.CardfondoT}>
                <img className={style.icono} src={Tft}/>
                <h3 className={style.modo}>Team Figth Tactics</h3>
                <p className={style.Rt}>Una guerra por la supremacía, todos contra todos.</p>
                <p className={style.resu}>
                Reúne un escuadrón de campeones para que peleen por ti.
                 Sobrevive a tus siete oponentes y conviértete en el último en quedar en pie.
                </p>
                </div>
                </li>
            </ul>
        </div>
    </section>

    <div className={style.space}></div>

    <section className={style.Section3}>
    <div className={style.Skins}>
        <div className={style.SkinsC}>
            <div>
            <p className={style.subTS}>DOMINA CON</p>
            <h3 className={style.TitS}>ESTILO</h3>
            <p className={style.TextS}>Cambia la apariencia de tus campeones favoritos con aspectos y personaliza tu estilo.</p>
            </div>
        </div>
    </div>
    <div className={style.Guia}>
        <h4>ASPECTOS DE CAMPEON ▬</h4>
    </div>
    </section>
        
    <div className={style.space}></div>

    <section className={style.Section4}>
    <div className={style.Seeker}>
        <h2> Busca un Invocador</h2>
        <div className={style.Con_Boton}>
        <Link to="/seeker">
        <button className={style.Invocadores}><span>Buscar</span></button>
        </Link>
        </div>
    </div>
    </section>

    <div className={style.space}></div>
    <section className={style.Section5}>
    <button className={style.Descargar}><span>JUEGA GRATIS</span></button>
    </section>
    <Footer/> 
</div>
    )
}

export default Home;