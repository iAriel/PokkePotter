import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

import api from '../../api';

import Nav from '../../components/nav';
import Footer from '../../components/footer';

export default function WizardDetails() {
    const { name } = useParams();

    const [wizard, setWizard] = useState({});
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getWizard() {
            const { data: {
                wizard, pokemons
            }} = await api.get(`/wizards/${decodeURIComponent(name)}`);
            setWizard(wizard);
            setPokemons(pokemons);
        }

        getWizard();
    }, [name]);

    if (!pokemons.length) {
        return (
            <div>
                <Nav />
                <div className="loading">
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Nav />
            <div className="information">
                <img src={wizard.image} alt={wizard.name} srcset=""/>
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
                        <div class="col s12 m3">
                            <div class="card" >
                                <div class="card-image">
                                    <img src={pokemon.sprites.other['official-artwork'].front_default} />
                                    <span class="card-title">{pokemon.name}</span>
                                </div>
                                <div class="card-content">
                                    <ul>
                                        <li><p>Pokedex ID: {pokemon.id}</p></li>
                                        <li><p>Experiência: {pokemon.base_experience} Pontos</p></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>                
            <Footer />
        </div>
    );
}