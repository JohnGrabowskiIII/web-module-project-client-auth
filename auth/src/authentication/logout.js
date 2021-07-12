const logout = () => {
    window.localStorage.removeItem('token');
    console.log('log out')
}

export default logout;