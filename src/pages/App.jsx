import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../helper/PrivateRouter';

import '../css/style.css';

//Pages
import Home from './Home';
import Notfound from './Error/404';
import SignUp from './Authentication/SignUp';
import Login from './Authentication/Login';
import Profile from './Profile';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/auth/signup" render={props => <SignUp {...props} />} />
            <Route path="/auth/login" render={props => <Login {...props} />} />
            {/* user-panel */}
            <PrivateRoute path="/profile" component={Profile} permission="user" />
            {/* admin-panel */}
            <PrivateRoute path="/panel/profile" component={Profile} permission="admin" />
            <Route component={Notfound} />
        </Switch>
    </Router>
)

export default App