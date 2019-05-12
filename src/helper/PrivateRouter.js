import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthHelperMethods from './Anthentication/AuthHelperMethods';

export const PrivateRoute = ({ component: Compopnent, ...rest }) => {

    const Auth = new AuthHelperMethods()

    if (Auth.loggedIn()) {

        const credential = Auth.getConfirm()

        return (
            <Route {...rest} render={props => (Auth.chackRole() === rest.permission) ? (<Compopnent credential={credential} {...props} />) : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)} />
        )

    } else {

        return (<Route {...rest} render={props => <Redirect to={{ pathname: "/auth/login", state: { from: props.location } }} />} />)
    }
}