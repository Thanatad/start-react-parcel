import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Front';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirm: ''
        }
    }

    _handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const userdata = {
            name: this.state.firstname + ' ' + this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.confirm
        }

        axios.post('https://laravel-api-jwt.herokuapp.com/api/v1/auth/register', userdata).then(res => {
            console.log(res);
            this.props.history.replace('/auth/login')
        })
    }

    render() {
        const { firstname, lastname, email, password, confirm } = this.state
        
        const styles = {
            body: {
                marginTop: '150px'
            }
        }

        return (
            <React.Fragment>
                <Navbar />
                <div className="container" style={styles.body}>
                    <form autoComplete="off" className="mt-20 mb-40">
                        <div className="field">
                            <label htmlFor="กรอกชื่อ" className="label">กรอกชื่อ</label>
                            <div className="control">
                                <input className={firstname !== '' ? 'input is-primary' : 'input is-danger'} type="text" name="firstname" id="firstname" value={firstname} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="กรอกนามสกุล" className="label">กรอกนามสกุล</label>
                            <div className="control">
                                <input className={lastname !== '' ? 'input is-primary' : 'input is-danger'} type="text" name="lastname" id="lastname" value={lastname} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="กรอกอีเมล์" className="label">กรอกอีเมล์</label>
                            <div className="control">
                                <input className={email !== '' ? 'input is-primary' : 'input is-danger'} type="text" name="email" id="email" value={email} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="กรอกรหัสผ่าน" className="label">กรอกรหัสผ่าน</label>
                            <div className="control">
                                <input className={password !== '' ? 'input is-primary' : 'input is-danger'} type="password" name="password" id="password" value={password} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="ยืนยันรหัสผ่าน" className="label">ยืนยันรหัสผ่าน</label>
                            <div className="control">
                                <input type="password" name="confirm" id="confirm" value={confirm} className={(password === confirm) && (confirm !== '') ? 'input is-primary' : 'input is-danger'} onChange={this._handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button onClick={this.onSubmit} className="button is-dark" disabled={(firstname !== '') && (lastname !== '') && (email !== '') && (password === confirm) && (confirm !== '') ? '' : 'disabled'}>ยืนยันการสมัคร</button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SignUp