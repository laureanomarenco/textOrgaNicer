import putPage from "../fetchs/putPage.js"

function page(id, idFolder, titulo, subtitulo, firma, contenido){

    const $pageDiv = document.querySelector("form")
    $pageDiv.classList.add("page-container")
    $pageDiv.id = id

    const $prevTitulo = document.querySelector("#titulo")
    $pageDiv.removeChild($prevTitulo)

    const $titulo = document.createElement("input")
    $titulo.id = "titulo"
    $titulo.classList.add("titulo")
    $titulo.value = titulo
    $pageDiv.appendChild($titulo)

    const $prevSubitulo = document.querySelector("#subtitulo")
    $pageDiv.removeChild($prevSubitulo)

    const $subtitulo= document.createElement("input")
    $subtitulo.id = "subtitulo"
    $subtitulo.classList.add("subtitulo")
    $subtitulo.value = subtitulo
    $pageDiv.appendChild($subtitulo)


    const $prevFirma = document.querySelector("#firma")
    $pageDiv.removeChild($prevFirma)

    const $firma = document.createElement("input")
    $firma.id = "firma"
    $firma.classList.add("firma")
    $firma.value = firma
    $pageDiv.appendChild($firma)

    const $prevContenido = document.querySelector("#contenido")
    $pageDiv.removeChild($prevContenido)

    const $contenido = document.createElement("textarea")
    $contenido.id = "contenido"
    $contenido.classList.add("contenido")
    $contenido.value = contenido
    $pageDiv.appendChild($contenido)

    
    $titulo.addEventListener("keyup", (e) => {
        putPage(id, idFolder, $titulo.value, $subtitulo.value, $firma.value, $contenido.value)
    })
    $subtitulo.addEventListener("keyup", (e) => {
        putPage(id, idFolder, $titulo.value, $subtitulo.value, $firma.value, $contenido.value)
    })
    $firma.addEventListener("keyup", (e) => {
        putPage(id, idFolder, $titulo.value, $subtitulo.value, $firma.value, $contenido.value)
    })
    $contenido.addEventListener("keyup", (e) => {
        putPage(id, idFolder, $titulo.value, $subtitulo.value, $firma.value, $contenido.value)
    })
}

export default page;