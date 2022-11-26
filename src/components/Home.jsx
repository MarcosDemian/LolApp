import React from "react";
import Footer from "./Footer";
import style from "./Home.module.css";
import NavBar from "./NavBar";

import {
    BrowserRouter as Router,
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
            <img className={style.Lol} src="https://i.imgur.com/cbl6Yed.png" />
        </div>
    </section>

    <section className={style.Section2_5}>
            <div className={style.Bar}>
                <div className={style.Cont_Bar}>
                <div className={style.Txt}>
                    ÚNETE A NUESTRAS REDES SOCIALES
                </div>
                <div className={style.Icons}>
                    <a target="_blank" className={style.Alink} href="https://www.instagram.com/juegalol/">
                    <img src="https://i.imgur.com/4jUIvNb.png" />
                    </a>
                    <a target="_blank" className={style.Alink} href="https://discordapp.com/invite/riotgameslatam">
                    <img src="https://i.imgur.com/LOQIpZM.png" />
                    </a>
                    <a target="_blank" className={style.Alink} href="https://twitter.com/lollatam">
                    <img src="https://i.imgur.com/tGttBjO.png" />
                    </a>
                    <a target="_blank" className={style.Alink} href="https://www.facebook.com/LeagueofLegendsLatino/">
                    <img src="https://i.imgur.com/No6Q9pp.png" />
                    </a>
                    <a target="_blank" className={style.Alink} href="https://www.youtube.com/user/RiotGamesLatino/">
                    <img src="https://i.imgur.com/vx20Wyo.png" />
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
            <img className={style.Divi} src="https://i.imgur.com/mC9Eroy.png" />
        </div>
    </div>

    <section id="scroll-content" className={style.Section2}>
    <ul className={style.CNoticias}>
        <li className={style.Noticias}>
            <div className={style.FotoN}>
                <img className={style.FotosN} src="https://i.imgur.com/WUZM4Y1.jpg"/>
            </div>
            <div className={style.TituloN}>
                <div className={style.TituloC}>
                <h3 className={style.Titulos}>CONVIÉRTETE EN EL JEFE</h3>
                <p className={style.Parrafos}>
                Analiza todos los campeones, elige el que más te guste para combatir 
                y conviértete en el jefe de la arena
                </p>
                </div>
            </div>
        </li>
        <li className={style.Noticias}>
            <div className={style.FotoN}>
                <img className={style.FotosN} src="https://i.imgur.com/TqE1YWm.png"/>
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
          <div className={style.Champ_titl}>
            <p className={style.subTC}>Miles de</p>
            <h3 className={style.TitC}>Campeónes</h3>
            </div>
          </Link>
        </div>
    </section>
        
    <div className={style.space}></div>

    <section className={style.Section7}>
        <div className={style.CardsC}>
            <ul className={style.Ccards}>
                <li className={style.Cards}>
                <div className={style.CardfondoG}>
                <img className={style.icono} src="https://i.imgur.com/6eA8PdK.png"/>
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
                <img className={style.icono} src="https://i.imgur.com/jjJffMq.png"/>
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
                <img className={style.icono} src="https://i.imgur.com/t8YFAdo.png"/>
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

    <div className={style.space}></div>
    <section className={style.Section5}>
    <button className={style.Descargar}><span>JUEGA GRATIS</span></button>
    </section>
    <Footer/> 
</div>
    )
}

export default Home;