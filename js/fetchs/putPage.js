import url from "./constants.js"

const putPage = async (id, idFolder, titulo, subtitulo, firma, contenido) => {
    const objPut = {
        id,
        idFolder,
        titulo,
        subtitulo,
        firma,
        contenido
    }

    const objConfig = {
        method: 'PUT', // Método HTTP (Verbo) CREATE
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(objPut) // transforma un obj js en un string
    }

    const aux = await fetch(url + "pages/" + id, objConfig)
    const update = aux.json()
    return update
}

export default putPage