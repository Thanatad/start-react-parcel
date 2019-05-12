import decode from 'jwt-decode';

export default class AuthHelperMethods {

    login = (userdata) => {
        return this.fetch('https://laravel-api-jwt.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email: userdata.email, password: userdata.password })
        }).then(res => {
            this.setToken(res.token)
            return Promise.resolve(res);
        })
    }

    loggedIn = () => {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token) //token must have empty And isTokenEXpired is false return true
    }

    chackRole = () => {
        if (this.getToken()) {
            const decoded = decode(this.getToken())
            return decoded.role
        } else {
            return null
        }
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token)
            if (decoded.exp < Date.now() / 1000) {
                return true
            } else {
                return false
            }
        }
        catch (err) {
            console.log("expired check failed!");
            return false
        }
    }

    getConfirm = () => {
        let answer = decode(this.getToken())
        console.log('Recieved answer!');
        return answer
    }

    setToken = (token) => {
        localStorage.setItem('a85aac90c1e42d3a7fbdc4da10b36527', token)
    }

    getToken = () => {
        return localStorage.getItem('a85aac90c1e42d3a7fbdc4da10b36527')
    }

    logout = () => {
        localStorage.removeItem('a85aac90c1e42d3a7fbdc4da10b36527')
    }

    fetch = (uri, options) => {

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(uri, {
            headers,
            ...options
        }).then(this._checkStatus).then(res => res.json())
    }

    _checkStatus = (res) => {
        if (res.status >= 200 && res.status < 300) {
            return res
        } else {
            let error = new Error(res.statusText)
            error.res = res
            throw error
        }
    }
}