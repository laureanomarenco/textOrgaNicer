const getPagesOfFolder = async (url, idFolder) => {
    const aux = await fetch(url + "pages?idFolder=" + idFolder)
    const pages = await aux.json()
    return pages
}

export default getPagesOfFolder