import React from 'react';
import { Link } from 'react-router-dom';

import { UseTheme } from '../../context/Theme';

import './styles.css';

export default function nav(){
    const { theme } = UseTheme();

    return(
        <nav style={theme}>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">PokePotter</Link>
            </div>
        </nav>
    );

}