import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import './style.css';

import api from '../../services/api';

export default function WizardDetails() {
    const { name } = useParams();

    const [wizard, setWizard] = useState({});
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getWizard() {
            const { data: {
                wizard, pokemons
            } } = await api.get(`/wizards/${decodeURIComponent(name)}`);
            setWizard(wizard);
            setPokemons(pokemons);
            console.log(pokemons);
        }

        

        getWizard();
    }, [name]);

    if (!pokemons.length) {
        return (
            <main>
                <div className="loading">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="information">
                <img src={wizard.image} alt={wizard.name} srcset="" />
                <h1>{wizard.name}</h1>
            </div>

            <div className="poke">
                <ul>
                    {pokemons.map((pokemon) => (
                        <li key={pokemon.id}>


                        </li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <div className="row" >
                    {pokemons.map((pokemon) => (
                        <div className="col s12 m3">
                            <div className="card" id="pokeCard">
                                <div className="card-image" id="pokeImage">
                                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                                    <span className="card-title" id="pokeName">{pokemon.name}</span>
                                </div>
                                <div className="card-content">
                                    <ul>
                                        <li><p>Pokedex ID: {pokemon.id}</p></li>
                                        <li><p>Experiência: {pokemon.base_experience} Pontos</p></li>
                                        <li className="pokeType">
                                            <p>
                                                {pokemon.types.map((type) => (
                                                    <span>Tipo: {type.type.name}</span>
                                            
                                                ))}
                                            </p>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}