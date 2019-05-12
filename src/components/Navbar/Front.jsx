import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import AuthHelperMethods from '../../helper/Anthentication/AuthHelperMethods';

class Front extends Component {

    constructor() {
        super()
        this.state = {
            active: false
        }

        this.Auth = new AuthHelperMethods()
    }

    _handleActive = () => this.setState(state => state.active = !state.active)

    render() {
        const chklogin = (<div className="buttons"><NavLink to="/auth/signup" className="button is-primary"><strong>Sign up</strong></NavLink><NavLink to="/auth/login" className="button is-light">LogIn </NavLink></div>)
        const chklogout = (<div className="buttons"><NavLink to="/" onClick={() => this.Auth.logout()} className="button is-light">LogOut </NavLink></div>)

        return (
            <React.Fragment>
                <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <NavLink className="navbar-item" to="#">
                            <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" width={110} height={28} />
                        </NavLink>
                        <NavLink to="#" onClick={this._handleActive} role="button" className={this.state.active ? 'navbar-burger burger is-active' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </NavLink>
                    </div>
                    <div id="navbarBasicExample" className={this.state.active ? 'navbar-menu is-active' : 'navbar-menu'}>
                        <div className="navbar-start">
                            <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                            <NavLink to={this.Auth.chackRole() === "user" ? "/profile" : "/panel/profile"} activeClassName="is-active" className="navbar-item">Profile</NavLink>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    {!this.Auth.loggedIn() ? chklogin : chklogout}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default withRouter(Front)