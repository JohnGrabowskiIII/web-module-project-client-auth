// UERNAME: Lambda
// PASSWORD: School

import {useState} from 'react'
import axios from 'axios'

import axiosWithAuth from '../authentication/axiosWithAuth'
import localHost from '../authentication/localHost'

import PasswordField from "./PasswordField"
import UsernameField from "./UsernameField"

const initLoginState = {
    username: '',
    password: ''
}

const Login = (props) => {

    const [loginForm, setLoginForm] = useState(initLoginState)

    const changeHandler = (e) => {
        const {name, value} = e.target
        setLoginForm({...loginForm, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post(`${localHost}/api/login`, loginForm)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                // props.context.history.push('/')
                setLoginForm(initLoginState)
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