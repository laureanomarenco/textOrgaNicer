import url from "../fetchs/constants.js"
import checkLogIn from "../functions/checkLogIn.js"

const login = async (url) => {

    const $aside = document.querySelector("aside")

    const $loginDiv = document.createElement('div')
    $loginDiv.classList.add('login-div')

    const $loginForm = document.createElement('form')
    const $loginTitle = document.createElement('h2')
    $loginTitle.innerHTML = 'Ingresar'
    $loginForm.appendChild($loginTitle)
    //mail
    const $labelMail = document.createElement('label')
    $labelMail.innerHTML = "Ingrese su email"
    $loginForm.appendChild($labelMail)
    const $inputMail = document.createElement('input')
    $loginForm.appendChild($inputMail)
    //pass
    const $labelPassword = document.createElement('label')
    $labelPassword.innerHTML = "Ingrese su constraseña"
    $loginForm.appendChild($labelPassword)
    const $inputPassword = document.createElement('input')
    $inputPassword.type = "password"
    $loginForm.appendChild($inputPassword)
    //submit
    const $loginSubmit = document.createElement('button')
    $loginSubmit.innerHTML = 'Ingresar'
    $loginForm.appendChild($loginSubmit)
    // //register
    // const $registerLink = document.createElement('a')
    // $registerLink.classList.add('register-modal')
    // $registerLink.innerHTML = 'Registrarse'
    // $loginForm.appendChild($registerLink)

    $loginDiv.appendChild($loginForm)

    $aside.appendChild($loginDiv)

    $loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const loged = await checkLogIn(url, $inputMail.value, $inputPassword.value)

        if(loged){
            location.href = "index.html"
        } else {
            localStorage.setItem('login', 'false');
            const error = document.createElement('p')
            error.classList.add('error')
            error.innerHTML = "Datos incorrectos"
            $loginForm.appendChild(error)
        }
    })
}

export default login