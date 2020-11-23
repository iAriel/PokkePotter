import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Characters from './pages/Characters';
import WizardDetails from './pages/WizardDetails';

import ThemeProvider from './context/Theme';

export default function Routes() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Nav />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/characters/:house" component={Characters} />
                    <Route path="/wizards/:name" component={WizardDetails} />
                </Switch>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
}

