const checkLogIn = async (url) => {
    const idLoged = localStorage.getItem('login')


    const aux = await fetch(url + "user_private")
    const users = await aux.json()


    let session = false;
    
    users.map(u => {
        if (idLoged == u.idUser) session = true;
    })
console.log(session);
    return session

}

export default checkLogIn