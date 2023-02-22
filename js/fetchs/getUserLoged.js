const getUserLoged = async (url) => {
    const idLoged = localStorage.getItem('login')

    const aux = await fetch(url + "user/" + idLoged)
    const user = await aux.json()

    return user
}

export default getUserLoged