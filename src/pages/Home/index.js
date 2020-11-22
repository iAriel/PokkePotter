import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import api from '../../api';

export default function Home() {

    const [houses, setHouses] = useState([]);
    useEffect(() => { 
        async function getHouses(){
            const response = await api.get('/houses');
            setHouses(response.data);
        }

        getHouses();
     }, []); 

    return (
        <main>
            <div className="head">
                <img src="https://i.pinimg.com/originals/7a/37/c7/7a37c7b60c016089a64ec5effc1a2512.png" alt="Escudo de Hogwarts"/>
                <h1>Escolha Uma Casa</h1>
            </div>
            <div className="choice">

                <Link to={`/characters/${houses[0]}`} className= "grifi">
                    <img src="
                    https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072953571   " alt={houses[0]}/>
                </Link>

                <Link to={`/characters/${houses[1]}`} className= "sons">
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072953899" alt={houses[1]}/>
                </Link>

                <Link to={`/characters/${houses[2]}`} className= "corv">
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072954238" alt={houses[2]}/>
                </Link>
                <Link to={`/characters/${houses[3]}`} className= "lufa">
                    <img src="https://img.r7.com/images/casas-de-hogwarts-significados-por-tras-dos-lares-da-escola-bruxa-24082020072954574?dimensions=600x315&crop_position=c" alt={houses[3]}/>
                </Link>
            </div>           
        </main>
    );
}