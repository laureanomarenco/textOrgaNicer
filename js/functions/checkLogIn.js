const checkLogIn = async (url, mail, password) => {
    const aux = await fetch(url + "user_private")
    const users = await aux.json()
    
    let loged = false;

    users.map(u => {
        if(u.mail === mail && u.password === password) {
            localStorage.setItem('login', u.idUser)
            loged = true
        }
    })

    return loged
}

export default checkLogIn