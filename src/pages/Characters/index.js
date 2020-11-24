import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Characters() {
    const { house } = useParams();

    const [wizards, setWizards] = useState([]);

    useEffect(() => {
        async function getWizards() {
            const response = await api.get(`/wizards/houses/${house}`);
            setWizards(response.data);
        }

        getWizards();
    }, [house]);

    if (!wizards.length) {
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
            <div className="head">
                <img src="https://i.pinimg.com/originals/7a/37/c7/7a37c7b60c016089a64ec5effc1a2512.png" alt="Escudo de Hogwarts" />
            </div>

            <div className="container">
                <div className="row" >
                    {wizards.map(wizard => (
                        <div className="col s12 m3" key={wizard.name}>
                            <div className="card" id="carta">
                                <div className="card-image">
                                    <Link to={`/wizards/${encodeURIComponent(wizard.name)}`}>
                                        <img className="image" src={wizard.image} alt={wizard.name} />
                                    </Link>

                                    <span className="card-title">
                                        <Link to={`/wizards/${encodeURIComponent(wizard.name)}`}> {wizard.name} </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}