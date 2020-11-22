import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Characters  from './pages/Characters';
import WizardDetails from './pages/WizardDetails';

export default function Routes() {
    return(
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/characters/:house" component={Characters}/>
                <Route path="/wizards/:name" component = {WizardDetails}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

