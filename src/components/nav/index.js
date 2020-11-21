import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function nav(){
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">PokePotter</Link>
            </div>
        </nav>
    );

}