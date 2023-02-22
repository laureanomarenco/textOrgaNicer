import checkLogIn from "../functions/checkLogIn.js"
import url from "../fetchs/constants.js"
import getFolders from "../fetchs/getFolders.js"
import getPagesOfFolder from "../fetchs/getPagesOfFolder.js"
import getUserLoged from "../fetchs/getUserLoged.js"
import checkSession from "../functions/checkSession.js"
import login from "./login.js"
import page from "./page.js"

const menu = async (folders) => {

    const $aside = document.querySelector("aside")
    $aside.classList.add("menu")

    const session = await checkSession(url)

    if(session){
        const user = await getUserLoged(url)
        const $user = document.createElement("p")
        $user.classList.add("user")
        $user.innerHTML = user.username
        $aside.appendChild($user)
    } else {
        const $loginBtn = document.createElement("p")
        $loginBtn.classList.add("user")
        $loginBtn.innerHTML = "Login"

        $loginBtn.addEventListener("click", async (e) => {
            await login(url)
        })

        $aside.appendChild($loginBtn)
    }

    const $folderContainerDiv = document.createElement("div")
    $folderContainerDiv.classList.add("folder-container")
    $aside.appendChild($folderContainerDiv)

    folders.map(async (f, i) => {

        const $folderDiv = document.createElement("div")
        $folderDiv.id = f.idFolder
        $folderDiv.classList.add("folder")
        $folderContainerDiv.appendChild($folderDiv)

        const $folderTituloP = document.createElement("p")
        $folderTituloP.classList.add("folder-titulo")
        $folderTituloP.innerHTML = f.titulo
        $folderDiv.appendChild($folderTituloP)

        const $pagesContainerUl = document.createElement("ul")
        $pagesContainerUl.classList.add("pages-ul")
        if(i === 0) $pagesContainerUl.classList.add("visible")
    
        $folderDiv.appendChild($pagesContainerUl)


        const pages = await getPagesOfFolder(url, f.idFolder)

        if (pages) {
            pages.map((p, i) => {
                if(i === 0) page(p.id, p.idFolder, p.titulo, p.subtitulo, p.firma, p.contenido)
                
                const $pageLi = document.createElement("li")
                $pageLi.classList.add("page-li")
                $pageLi.id = p.id
                $pageLi.innerHTML = p.titulo

                $pageLi.addEventListener("click", (e) => {
                    e.preventDefault()
                    page(p.id, p.idFolder, p.titulo, p.subtitulo, p.firma, p.contenido)
                })

                $pagesContainerUl.appendChild($pageLi)
            })
        }

        const $pageNew = document.createElement("li")
                $pageNew.classList.add("page-new")
                $pageNew.innerHTML = "Crear página"

                $pageNew.addEventListener("click", (e) => {
                    e.preventDefault()
                    newPage(f.idFolder)
                })

                $pagesContainerUl.appendChild($pageNew)


        $folderTituloP.addEventListener("click", (e) => {
            $pagesContainerUl.classList.toggle("visible")
        })
    })

    const $newFolderDiv = document.createElement("div")
    $newFolderDiv.classList.add("folder")
    $folderContainerDiv.appendChild($newFolderDiv)

    const $newFolderP = document.createElement("p")
    $newFolderP.classList.add("folder-new")
    $newFolderP.innerHTML = "Nueva Carpeta"
    $newFolderDiv.appendChild($newFolderP)

    $newFolderP.addEventListener("click", (e) => {
        newFolder(u.idUser)
    })
}

const folders = await getFolders(url)
menu(folders)