/* variables*/
let palabra;
var errores = 0;
var acierto = 0;
let btncomenzar = document.querySelector(".btn");
let btngenerarPalabra = document.querySelector("#btn1");
let imagen = document.querySelector(".image")
var btnLetra = document.querySelectorAll("#letras button");
var menuPrincipal = document.querySelector(".container_menu");
var menuLetras = document.querySelector(".container_letras");
var menuComienzo = document.querySelector(".container_inicio");



const texto= [
    'oculto','vacuna','perseguir','caleidoscopio', 'memorizar','caza','chevrolet',
    'electrodomestico','twitch', 'cantante' , 'secreto' , 'centro','animal','tigre','leopardo',
    'minecraft','muñeco','universo','sistema solar'


]
function comenzar() {
    menuComienzo.style.display="none";
    menuPrincipal.style.display="flex";
    menuLetras.style.display="flex";
    menuPrincipal.style.transition="3s";
}

function alAzar(num_min,num_max){
    const valor = num_max - num_min;
    const numeroAzar = Math.floor( Math.random( ) * valor ) + num_min; 
    return numeroAzar;
}
function palabraSecreta(event){
  
    btngenerarPalabra.disabled = true;
    
    const plbraSecreta = document.querySelector(".palabra_secreta");
    
    let palabraOculta = plbraSecreta;
        palabraOculta.innerHTML = '';
    
    let cantidad_plbra = texto.length;
    
    let valorRandom = alAzar(0,cantidad_plbra);

    palabra = texto[valorRandom];
    
    console.log(palabra);

    const cant_letra = palabra.length;
    
    for( let i = 0; i < btnLetra.length ; i++ ){
        
        btnLetra[i].disabled = false;
    }
    for( let i = 0; i < cant_letra; i++ ){
        const span = document.createElement( 'span' );
        plbraSecreta.appendChild(span);
    }
    
}
for( let i = 0; i < btnLetra.length ; i++ ){
    btnLetra[i].addEventListener( 'click', adivinar);
}

function adivinar(event){
    var incognita = document.querySelectorAll( '.palabra_secreta span' );
    const button = event.target;
    button.disabled = true;
    
    const letra = button.innerHTML.toLowerCase( );
    const palabraLarge = palabra.toLowerCase( );
    
    let acerto = false;
    
    for( let i = 0; i < palabraLarge.length; i++ ){
        
        if( letra == palabraLarge[i] ){
            incognita[i].innerHTML = letra;
            acierto++;
            acerto = true;
        }
    }

    if( acerto == false ){
        errores++;
        const source = `./img/colg${errores}.png` ;
        imagen.src = source;
    }
    if( errores == 6 ){
        
        Swal.fire({
            title: 'GAME OVER',
            icon:'error',
            text: 'Perdiste, la palabra era ' + palabra + ', vuelve a intentarlo',
            confirmButtonText:'Aceptar',
            allowOutsideClick:false,
            
        }).then((result) => {
                finJuego();
                if (result.isConfirmed) {
                    menuComienzo.style.display="block";
                    location.reload();
                    setTimeout(() => {
                        
                    }, 10000);
                }
            })
    }
    else if( acierto == palabra.length ){
    
        Swal.fire({
            title: 'FELICIDADES',
            icon:'success',
            text: 'HAS GANADO, ERES EL MEJOR!',
            confirmButtonText:'Aceptar',
            allowOutsideClick:false,
            
        }).then((result) => {
            finJuego();
            
            if (result.isConfirmed) {
                menuComienzo.style.display="block";
                location.reload();
                setTimeout(() => {
                    
                }, 10000);
            }
        })
finJuego();
    }

function finJuego(){
    for( let i= 0; i < btnLetra.length ; i++){
        btnLetra[i].disabled = true;
    }
    button.disabled = false;
    }
}

