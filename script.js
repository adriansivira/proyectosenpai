const ingresar = document.getElementById("ingresar_button")
const close = document.querySelector(".eliminar")
const modalcontainer = document.querySelector(".modalcontainer")

ingresar.addEventListener('click', () => {
    modalcontainer.classList.add('open');
})

close.addEventListener('click', () => {
    modalcontainer.classList.remove('open')
})
function validarcorreo(correo) {
     var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
     return expReg.test(correo)
     
     
} 
function validartexto(texto) {
     var expReg= [a-zA-Z];
     return expReg.test(texto)
     
} 

function validacion(a,b) {
    if (validarcorreo(a) && validartexto(b)) {
        alert("Form enviado")
    }
    else {
        alert("Campos inválidos")
    }
}

function contador() {
    var total = 50
    setTimeout(function(){
        var valor = document.getElementById('cont')
        var respuesta = document.getElementById('result')
        var cantidad = valor.value.length
        document.getElementById('result').innerHTML = (total - cantidad) + "/" + total
        if( cantidad > total ){
            respuesta.style.color="red"
        }
        else {
            respuesta.style.color = "black"
        }
    })
}

const navus = document.querySelector(".nosotros")
const navnews = document.querySelector(".noticias")
const navhelp = document.querySelector(".ayuda")
const buttonav = document.querySelector(".button_nav")

navus.addEventListener('mouseover', () => navus.style.backgroundColor = "#5227cc")
navus.addEventListener('mouseout', () => navus.style = "")
navnews.addEventListener('mouseover', () => navnews.style.backgroundColor = "#5227cc")
navnews.addEventListener('mouseout', () => navnews.style = "")
navhelp.addEventListener('mouseover', () => navhelp.style.backgroundColor = "#5227cc")
navhelp.addEventListener('mouseout', () => navhelp.style = "")

navus.addEventListener('mousedown', () => navus.style.backgroundColor = "#5327cc75")
navus.addEventListener('mouseup', () => navus.style = "")
navnews.addEventListener('mousedown', () => navnews.style.backgroundColor = "#5327cc75")
navnews.addEventListener('mouseup', () => navnews.style = "")
navhelp.addEventListener('mousedown', () => navhelp.style.backgroundColor = "#5327cc75")
navhelp.addEventListener('mouseup', () => navhelp.style = "")

buttonav.addEventListener('mousedown', () => buttonav.style.backgroundColor = "#5327cc75")
buttonav.addEventListener('mouseup', () => buttonav.style = "")
buttonav.addEventListener('mouseover', () => buttonav.style.boxShadow = "4px 5px 10px black")
buttonav.addEventListener('mouseout', () => buttonav.style.boxShadow = "")

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}