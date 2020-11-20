import React from 'react';

import './styles.css';

export default function Footer(){
    return(
        
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">PokePotter</h5>
                <p class="grey-text text-lighten-4">Descubra quais os pokemosn preferidos de cada estudante e Funcionário de Hogwarts</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">GitHub</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/iAriel">Ariel Sobreira</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/matheusmaximianomv">Matheus Maximiano</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
                © 2020 StarFruit Company
            </div>
          </div>
        </footer>
            
    );
        

}