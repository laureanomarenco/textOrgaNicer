const getFolders = async (url) => {
    const aux = await fetch(url + "folder")
    const folders = await aux.json()
    return folders
}

export default getFolders