//capturamos elementos del DOM (en este caso los botones)
let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano-usuaria')
let manoCompu = document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuaria p')
let puntajeComputador = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario= ""
let eleccionCompu = ""

let contadorUsuario = 0
let contadorComputador = 0


Swal.fire(
    'Jugamos?',
    'Gana el primero que obtenga tres puntos :) !',
    'success'
  )

  const eleccionComputadora = () => {
    let opcionAlAzar = Math.floor(Math.random()*3);
    //opcion piedra

    if(opcionAlAzar==0){
        manoCompu.src = "./assets/piedra_computadora.png";
        eleccionCompu = "piedra"
    }
    else if(opcionAlAzar == 1){
        manoCompu.src = "./assets/papel_computadora.png";
        eleccionCompu = "papel"
    }
    else {
        manoCompu.src = "./assets/tijera_computadora.png";
        eleccionCompu = "tijera"
    }
  }

//resultado y limpiar marcador 


const resultado = () => {
    if(eleccionUsuario=="piedra"){
    if(eleccionCompu=="piedra"){
        labelResultado.textContent = "Empate!!😵";
    }
    if(eleccionCompu == "papel"){
        labelResultado.textContent = "Perdiste!!😭";
        contadorComputador++;
        puntajeComputador.textContent = contadorComputador;
        ganador(contadorUsuario,contadorComputador)
    }
    if(eleccionCompu == "tijera"){
        labelResultado.textContent = "Ganaste!!🥳";
        contadorUsuario++;
        puntajeUsuario.textContent = contadorUsuario;
        ganador(contadorUsuario,contadorComputador)
    }
    }

    if(eleccionUsuario =="papel"){
    if(eleccionCompu == "piedra"){
        labelResultado.textContent = "Ganaste!!🥳";
        contadorUsuario++;
        puntajeUsuario.textContent = contadorUsuario;
        ganador(contadorUsuario,contadorComputador)
    }
    if(eleccionCompu == "papel"){
        labelResultado.textContent = "Empate!!😵"
    }
    if(eleccionCompu == "tijera"){
        labelResultado.textContent = "Perdiste!!😭";
        contadorComputador++;
        puntajeComputador.textContent = contadorComputador;
        ganador(contadorUsuario,contadorComputador)
    }
    }

    if(eleccionUsuario == "tijera"){
    if(eleccionCompu == "piedra"){
        labelResultado.textContent = "Perdiste!!😭";
        contadorComputador++;
        puntajeComputador.textContent = contadorComputador;
        ganador(contadorUsuario,contadorComputador)
    }
    if(eleccionCompu == "papel"){
        labelResultado.textContent = "Ganaste!!🥳";
        contadorUsuario++;
        puntajeUsuario.textContent = contadorUsuario;
        ganador(contadorUsuario,contadorComputador)
    }
    if(eleccionCompu == "tijera"){
        labelResultado.textContent = "Empate!!😵"
    }
    } 

}
const ganador = ()=>{
     if(contadorComputador==3){ 
    Swal.fire(             
    'Perdiste!!😭',
    'Te ha ganado una maquina! 👎',
    'red'         ) 
    contadorComputador=0
    contadorUsuario=0  
    puntajeUsuario.textContent = contadorUsuario
    puntajeComputador.textContent = contadorComputador
    labelResultado.textContent = "Seleccione una opcion"  
    manoCompu.src = "./assets/piedra_computadora.png"
    manoUsuario.src = "./assets/piedra_user.png"
    }else if(contadorUsuario==3){  
     Swal.fire(
    'Ganaste!!🥳',
    'felicidades la has ganado a la maquina 👍',            
    'sucess'         )
    contadorComputador=0 
    contadorUsuario=0   
    puntajeUsuario.textContent = contadorUsuario
    puntajeComputador.textContent = contadorComputador  
    labelResultado.textContent = "Seleccione una opcion"
    manoCompu.src = "./assets/piedra_computadora.png"
    manoUsuario.src = "./assets/piedra_user.png"
 } 
}



botonPiedra.onclick = () => {
  manoUsuario.src = "./assets/piedra_user.png";
  manoCompu.src = "./assets/piedra_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuario.src = "./assets/piedra_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

botonPapel.onclick = () => {
  manoUsuario.src = "./assets/papel_user.png";
  manoCompu.src = "./assets/papel_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "papel";
    manoUsuario.src = "./assets/papel_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

botonTijera.onclick = () => {
  manoUsuario.src = "./assets/tijera_user.png";
  manoCompu.src = "./assets/tijera_computadora.png";
  labelResultado.textContent="...";
  tablero.classList.add("jugando");
  setTimeout(() => {
    eleccionUsuario = "tijera";
    manoUsuario.src = "./assets/tijera_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando");
  }, 200);
};

