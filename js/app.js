/*
* JS Para la comprobación de datos del Formulario de entrada
*
*/

//Inicializacion de var,objetos, DOM
var nickInput;
var emailInput;
var tamanoInput;
var formEntrada;
var error;
var avatarItems;
var itemImg;
var avatarCont;

//Funciones de evento
function comprobarForm(event){
    //Comprobar cambios
    if(nickInput.value.match(/(?<!\S)[0-9]/))
    {
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo de nick no puede comenzar con un numero";
        return false;
    }else if(tamanoInput.value=="0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText="Se debe seleccionar un tamaño de panel";
        return false;
    }
    //Informacion es correcta
    datosUsuario(nickInput, tamanoInput, emailInput,avatarCont);
    return true;
}
function moviendoImg(event){
    itemImg=event.target;
    console.log(itemImg.src);
}
function cambiarImg(event){
    avatarCont.src=itemImg.src;
}
//carga de objetos del dom, comprobaciones y formulario
function domCargado(){
    //caputra de todos los elements necesarios
     nickInput = document.getElementById("nick");
     emailInput = document.getElementById("email");
     tamanoInput = document.getElementById("tamano");
     formEntrada = document.getElementById("formEntrada");
     error = document.getElementById("error");
//Comprobar si hay algún error de juego.html
//Si es nulo es porque esta todo bien. Si es null hay que resetear el valor session
    if(sessionStorage.getItem('error')!=null)
    {
        error.innerText=sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    formEntrada.addEventListener('submit',comprobarForm);
    //eventos de DYD
    avatarItems = document.getElementsByClassName("avatarImgItem");
    for(let item of avatarItems){
        item.addEventListener('dragstart',moviendoImg)
    }
    avatarCont = document.getElementById("avatarImg");
    avatarCont.addEventListener('dragover',e=>{e.preventDefault()})
    avatarCont.addEventListener('drop',cambiarImg)

}

//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded', domCargado);
//geolocalizacion
datoGeolocalizacion();