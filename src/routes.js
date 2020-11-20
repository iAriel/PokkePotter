import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Characters  from './pages/Characters';
import WizardDetails from './pages/WizardDetails';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" component={Home} exact/>
                <Route path="/characters/:house" component={Characters}/>
                <Route path="/wizards/:name" component = {WizardDetails}/>
                
            </Switch>
        </BrowserRouter>
    );
}

