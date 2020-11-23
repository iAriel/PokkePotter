import React from 'react';

import './styles.css';

import { UseTheme } from '../../context/Theme';

export default function Footer() {
  const { theme } = UseTheme();

  return (
    <footer style={theme}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">PokePotter</h5>
            <p className="grey-text text-lighten-4">Descubra quais os pokemons preferidos de cada estudante e Funcionário de Hogwarts</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">GitHub</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="https://github.com/iAriel">Ariel Sobreira</a></li>
              <li><a className="grey-text text-lighten-3" href="https://github.com/matheusmaximianomv">Matheus Maximiano</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
          © 2020 StarFruit Company
        </div>
      </div>
    </footer>

  );


}