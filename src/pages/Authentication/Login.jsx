import React, { Component } from 'react';
import AuthHelperMethods from '../../helper/Anthentication/AuthHelperMethods';
import Navbar from '../../components/Navbar/Front';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }

        this.Auth = new AuthHelperMethods();
    }

    _handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    onSubmit = (e) => {
        e.preventDefault()

        this.Auth.login(this.state)

            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                } else if (this.Auth.chackRole() === 'user') {
                    this.props.history.replace('/profile');
                } else if (this.Auth.chackRole() === 'admin') {
                    this.props.history.replace('/panel/profile');
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {

        const styles = {
            body: {
                marginTop: '150px'
            }
        }

        return (
            <React.Fragment>
                <Navbar />
            <div className="container" style={styles.body}>
                    <form autoComplete="on">
                        <div className="field">
                            <div className="control">
                                <label htmlFor="Email">Email</label>
                                <input type="text" name="email" id="email" className="input" value={this.state.email} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="password" id="password" className="input" value={this.state.password} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-dark" onClick={this.onSubmit} disabled={this.state.email && this.state.password !== '' ? '' : 'disabled'}>Sign In</button>
                            </div>
                        </div>
                    </form>
                    </div>
            </React.Fragment >
        )
    }
}

export default Login