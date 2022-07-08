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