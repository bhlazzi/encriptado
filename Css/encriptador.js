//declaracion de variables
var textoEncriptar = document.querySelector("#texto1")
var resultado = document.querySelector("#texto2")
var btnEncriptar = document.querySelector(".btn1")
var btnDesencriptar = document.querySelector(".btn2")
var btnCopiar = document.querySelector(".btn3")
var contText2 = document.querySelector(".container_texto2");
var contImg = document.querySelector(".contenedor_img");

//bloque contenedor de caracter para modificar
function encriptarTexto(palabraEncriptada){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    palabraEncriptada = palabraEncriptada.toLowerCase();

    for (let i = 0; i < letras.length; i++) {
        if (palabraEncriptada.includes(letras[i][0])) {
            palabraEncriptada = palabraEncriptada.replaceAll(letras[i][0], letras[i][1])
        }
    }
    return palabraEncriptada;
}

function desencriptarTexto(desencriptado){
    let letras = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    desencriptado = desencriptado.toLowerCase();

    for (let i = 0; i < letras.length; i++) {
        if (desencriptado.includes(letras[i][0])) {
            desencriptado = desencriptado.replaceAll(letras[i][0], letras[i][1])
        }
    }
    return desencriptado;
}
//mensaje de error en caso de fallo
function errorTexto(){
    Swal.fire({
        title: 'Error',
        icon:'error',
        text: 'No has ingresado ningun texto',
        confirmButtonText:'Aceptar',
        allowOutsideClick:false,
        footer:'<span class="span"> Recuerda solo minusculas y sin simbolos!</span>',
        width:'40%',
        padding:'3rem',
      })
}
//funcion para mostrar resultados de encriptacion en botones
function encriptar(){
    
    let textoListo = encriptarTexto(textoEncriptar.value);
    if(textoListo == ""){
        errorTexto();
    }
    
    else{
        resultado.value = textoListo;
        contText2.style.display = "unset";
        btnDesencriptar.style.display = "unset";
        contImg.style.display="none";
        
    }
     
}
function desencriptar(){
    
    let textoDesencrip = desencriptarTexto(resultado.value)
    resultado.value = textoDesencrip;
    contText2.style.display = "unset";
     
}
//funcion copiar mensaje con msj en ventana
function copiarMsj(){
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    Swal.fire({
        title: 'Copiado',
        icon:'success',
        text: 'Tu texto fue copiado con exito',
        confirmButtonText:'Aceptar',})
    mensaje.value = "";
}




