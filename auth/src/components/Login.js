// UERNAME: Lambda
// PASSWORD: School

import {useState} from 'react'
import axios from 'axios'

import axiosWithAuth from '../authentication/axiosWithAuth'
import localHost from '../authentication/localHost'

import PasswordField from "./PasswordField"
import UsernameField from "./UsernameField"

const Login = () => {

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const changeHandler = (e) => {
        const {name, value} = e.target
        setLoginForm({...loginForm, [name]: value })
        console.log(loginForm)
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post(`${localHost}/api/login`, loginForm)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                // PUSH TO HISTORY HERE
            })
    }

    return (
        <div>
            <h1>Login Loaded</h1>
            <form onSubmit={submit} >
                <UsernameField value={loginForm.username} change={changeHandler} />
                <PasswordField value={loginForm.password} change={changeHandler} />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default Login;