import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';

import './styles.css';
import api from '../../api';

import Nav from '../../components/nav';
import Footer from '../../components/footer';

export default function Characters(){
    const {house} = useParams();
    
    const [wizards, setWizards] = useState([]);

    useEffect(() => {
        async function getWizards(){
            const response = await api.get(`/wizards/houses/${house}`);
            setWizards(response.data);
        }

        getWizards();
    },[house]);

    // const styles = (cor) =>{
    //     if(cor === "Gryffindor"){
    //         return "#97100a";
    //     }else if (cor === "Slytherin"){
    //         return "#0b6242";
    //     }else if(cor === "Ravenclaw"){
    //         return "#43547f";
    //     }else if (cor ==="Hufflepuff"){
    //         return "#ca9923";
    //     }
        
    // };
    
    return(
        <div>
            <Nav/>
            <div className="head">
                <img src="https://i.pinimg.com/originals/7a/37/c7/7a37c7b60c016089a64ec5effc1a2512.png" alt="Escudo de Hogwarts"/>
            </div>
            
            <div className="container">
                <div className="row" >
                    {wizards.map(wizard => (
                                    <div className="col s12 m3" key={wizard.name}>
                                        <div className="card">
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
            
                <Footer /> 
        </div>
    );
}