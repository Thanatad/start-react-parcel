import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../css/style.css';

import Home from './Home';
import Notfound from './Error/404';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)

export default App