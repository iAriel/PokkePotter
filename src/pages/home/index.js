import React from 'react';
import './style.css';

// import Imagem from '../../assents/images/Grifinoria'

import Nav from '../../components/nav'
import Footer from '../../components/footer'

export default function Home() {
    return (
        <>
            <Nav/>
            <div className="head">
                <img src="https://i.pinimg.com/originals/7a/37/c7/7a37c7b60c016089a64ec5effc1a2512.png" alt="Escudo de Hogwarts"/>
                <h1>Escolha Uma Casa</h1>
            </div>
            <div className="choice">

                <a href="#" className= "grifi">
                    <img src="
                    https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072953571   " alt=""/>
                </a>

                <a href="#" className= "sons">
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072953899" alt=""/>
                </a>

                <a href="#" className= "corv">
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072954238" alt=""/>
                </a>
                <a href="#" className= "lufa">
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072954574?dimensions=600x315&crop_position=c" alt=""/>
                </a>
            </div>    
            <Footer/>           
        </>
    );
}