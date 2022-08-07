/* Primero vamos a identificar nuestras variables */
// * Botones
const btnEnviar = document.querySelector('#btnEnviar')
const btnBorrar = document.querySelector('#btnBorrar')
// * Campos
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
const edad = document.querySelector('#edad')
// * Formulario
const formulario = document.querySelector('#registro-usuario')
iniciarApp()

function iniciarApp() {
    // * Al inicio de la pagina 
    document.addEventListener('DOMContentLoaded', () => {
        cargaInicial()
        llenarSelect()
    })
    nombre.addEventListener('blur', validarCampos)
    apellido.addEventListener('blur', validarCampos)
    email.addEventListener('blur', validarCampos)
    edad.addEventListener('blur', validarCampos)
    btnBorrar.addEventListener('click', limpiarFormulario)
    formulario.addEventListener('submit', enviarFormulario)
}

function llenarSelect() {
    for (let i = 0; i <= 99; i++) {
        const año = document.createElement('option')
        año.value = i
        año.innerHTML = i
        edad.appendChild(año)
    }
}

function cargaInicial() {
    btnEnviar.disabled = true
    btnBorrar.disabled = true
}

function validarCampos(e) {
    console.log(e.target);
    if (e.target.value.length > 0) {
        btnBorrar.disabled = false
        e.target.classList.remove('error')
    }
    else {
        e.target.classList.add('error')
    }
    if (nombre.value !== '' && apellido.value !== '' && email.value !== '' && edad.value !== '') {
        btnEnviar.disabled = false
        console.log('Enviar');
    }
    else {
        btnEnviar.disabled = true
    }
}
function limpiarFormulario() {
    nombre.classList.remove('error')
    apellido.classList.remove('error')
    email.classList.remove('error')
    edad.classList.remove('error')
    formulario.reset()
    btnBorrar.disabled = true
    btnEnviar.disabled = true
}
function enviarFormulario(e) {
    e.preventDefault()
    const usuario = {
        nombre: nombre.value,
        apellido: nombre.value,
        email: email.value,
        edad: edad.value
    }
    console.log(usuario);
    mensaje('Usuario registrado')
    limpiarFormulario()
}
function mensaje(mensaje) {
    const header = document.querySelector('#header')
    const parrafo = document.createElement('P')
    parrafo.innerHTML = mensaje
    parrafo.classList.add('exito', 'animate__animated', 'animate__bounceInRight')
    header.insertBefore(parrafo, header.children[0])
    setTimeout(() => {
        parrafo.remove()
    }, 3000);
}