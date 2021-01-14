import Axios from 'axios';
import { userService } from './userService';
const axios = Axios.create({withCredentials: true})
const baseUrl = (process.env.NODE_ENV !== 'development') ? '/api/auth' : '//localhost:3030/api/auth';

const STORAGE_KEY = 'loggedInUser'

export const authService = {
    login,
    getLoggedUser,
    signup,
    logout
}


function login(credentials) {
    const loggedInUser = userService.login(credentials)
    return _handleLogin(loggedInUser)
    // return axios.post(`${baseUrl}/login`, credentials)
    //     .then(res => res.data)
    //     .then(user => {
    //         user = {...user}
    //         console.log('Login success',user);
    //         return _handleLogin(user);
    //     })
}
// credentials strucutre: {username: '', password: '', fullname: ''}
function signup(credentials) {
    return axios.post(`${baseUrl}/signup`, credentials)
        .then(res => res.data)
        .then(user => {
            console.log('Signup success');
            return _handleLogin(user);
        })
}
function logout() {
    return axios.post(`${baseUrl}/logout`)
        .then(res => res.data)
        .then(() => {
            console.log('Logout success');
            sessionStorage.clear();
            return ('clear now')
        })
}



function getLoggedUser(){
    if (!sessionStorage.getItem(STORAGE_KEY)) return null
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}

function _handleLogin(user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user
}

