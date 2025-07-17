//VARIABLES Y ARRAY PARA ELEMENTOS DEL HTML
let divTurno = document.getElementById("turno");
let botonC = document.getElementById("botonC");
let limpiarTablero = document.getElementById("limpiarT");
let contenedores = [
    document.getElementById("contenedor1"),
    document.getElementById("contenedor2"),
    document.getElementById("contenedor3"),
    document.getElementById("contenedor4"),
    document.getElementById("contenedor5"),
    document.getElementById("contenedor6"),
    document.getElementById("contenedor7"),
    document.getElementById("contenedor8"),
    document.getElementById("contenedor9")
];

//VARIABLES Y ARRAYS DE ENTORNOS USADOS PARA LA EJECUCIÓN DEL PROGRAMA.
let turnoJugador;
let contadorCasillasUsadas = 0;
let partidaGanada = true;
let ocupacion = Array(9).fill(false);
let tablero = Array(9).fill(null);//Usado para comprobar si hay ganador.

//IMAGENES NECESARIAS. Creación del elemento y asignación del src.
let imagenCirculo = document.createElement("img");
imagenCirculo.src = "circulo1.png";
imagenCirculo.alt = "Imagen de prueba";

let imagenCruz = document.createElement("img");
imagenCruz.src = "cruz1.png";
imagenCruz.alt = "Imagen de prueba";

//BOTONES DE ESCUCHA
//BOTON COMENZAR PARTIDA
botonC.addEventListener("click", () => {
    turnoJugador = Math.floor(Math.random() * 2 + 1);
    contadorCasillasUsadas = 0; 
    ocupacion.fill(false);
    tablero = Array(9).fill(null);
    partidaGanada = false;
    if (turnoJugador === 1) {
        divTurno.innerText = "TURNO DE X";
    }
    else{
        divTurno.innerText = "TURNO DE O";
    }
    contenedores.forEach(contenedor => {
        contenedor.innerHTML = "";
    });
    
})

//BOTON TABLERO DE JUEGO
contenedores.forEach((contenedor, index) => {
    contenedor.addEventListener("click", () =>{
    if(!partidaGanada){
        if(!ocupacion[index]) {
            ocupacion[index] = true;
            if(turnoJugador === 1){
                tablero[index] = "X"
            }
            else{
                tablero[index] = "O"
            }
            contadorCasillasUsadas++; 
            let imagen;
            if(turnoJugador === 1){
                imagen = imagenCruz.cloneNode(true);
            }
            else{
                imagen = imagenCirculo.cloneNode(true);
            }
            contenedor.appendChild(imagen);
            
            // Verificar si el juego termina
            if (verificarGanador()) {
                divTurno.innerText = "¡Jugador " + turnoJugador + " ha ganado!";
                partidaGanada = true;
            }
            else if (contadorCasillasUsadas === 9) {
                divTurno.innerText = "¡Empate!";
            } else {
                if(turnoJugador === 1){
                    turnoJugador = 2;
                }
                else{
                    turnoJugador = 1;
                    
                }
                if(turnoJugador === 1){
                    divTurno.innerText = "TURNO DE X";
                }
                else{
                    divTurno.innerText = "TURNO DE O";
                }
            }
        }
    }

    })
});

//BOTON LIMPIAR TABLERO
limpiarTablero.addEventListener("click", reiniciar);


//FUNCIONES USADAS
//COMPROBAR SI HAY GANADOR. Para está función usé .some(), ya existente, que devolvera true si al menos se da una combinación y false si no da ninguna.
function verificarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    return combinacionesGanadoras.some(combinacion =>
        tablero[combinacion[0]] !== null &&  // No puede estar vacío
        tablero[combinacion[0]] === tablero[combinacion[1]] &&
        tablero[combinacion[1]] === tablero[combinacion[2]]
    );
}

//REESTABLECER LOS VALORES INICIALES DE JUEGO
function reiniciar(){
    contenedores.forEach(element => {
        element.innerHTML = " ";
    });
}

