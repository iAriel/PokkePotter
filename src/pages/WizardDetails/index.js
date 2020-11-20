import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './style.css';

import api from '../../api';

import Nav from '../../components/nav';
import Footer from '../../components/footer';

export default function WizardDetails (){
    const {name} = useParams();
    const decodeName = decodeURIComponent(name);
    
    const [wizard, setWizard] = useState({});

    useEffect(() => {
        async function getWizard(){

            console.log(decodeName);
            
            const response = await api.get(`/wizards/${decodeName}`);
            setWizard(response.data);
        }

        getWizard();
    }, [name]);

    return(
        
        <div>
            <Nav/>
            <h1>{wizard.name}</h1>
            <Footer/>
        </div>
    );
}