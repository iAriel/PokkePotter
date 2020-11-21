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
                <h1>Carregando...</h1>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Nav />
            <h1>{wizard.name}</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <span>Nome do Pokemon: {pokemon.name}</span>
                        <p>Nº Pokedex: {pokemon.id}</p>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}