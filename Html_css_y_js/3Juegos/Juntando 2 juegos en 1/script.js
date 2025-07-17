//VARIABLES USADAS PARA JUGADOR A
let contadorPar =  0;
let imagen1Par;
let imagen2Par;
let img1;
let img2;
let posicion1;
let ocupacionA = Array(16).fill(false);
let botonR1 = document.getElementById("reinicio1");
let botonA1 = document.getElementById("asignar1");
let turnoJA = false;

//VARIABLES USADAS PARA JUGADOR B
let contadorParB =  0;
let imagen1ParB;
let imagen2ParB;
let img1B;
let img2B;
let posicion1B;
let ocupacionB = Array(16).fill(false);
let botonR2 = document.getElementById("reinicio2");
let botonA2 = document.getElementById("asignar2");
let turnoJB = false;

//VARIABLES USADAS PARA EL 3 EN RAYA
let botonC = document.getElementById("botonC");
let contadorCasillasUsadas = 0;
let partidaGanada = false;
let ocupacion = Array(9).fill(false);
let tablero = Array(9).fill(null);

//VARIABLES USADAS PARA EL GENERAL DEL JUEGO
let mostrarTG = document.getElementById("tg");
let mostrarTG0 = document.getElementById("tg0");
let botonIni = document.getElementById("inicio");

//CREACION IMAGENES 3 EN RAYA
let imagenCirculo = document.createElement("img");
imagenCirculo.src = "circulo1.png";
imagenCirculo.className = "img3r";
let imagenCruz = document.createElement("img");
imagenCruz.src = "cruz1.png";
imagenCruz.className = "img3r";

//CREACION DE IMAGENES NECESARIAS TABLERO A
let imagen1A = document.createElement("img");
imagen1A.src="circulo.png";
let imagen1B = document.createElement("img");
imagen1B.src="circulo.png";

let imagen2A = document.createElement("img");
imagen2A.src="cruz.png";
let imagen2B = document.createElement("img");
imagen2B.src="cruz.png";

let imagen3A = document.createElement("img");
imagen3A.src="relojSinManillas.png";
let imagen3B = document.createElement("img");
imagen3B.src="relojSinManillas.png";

let imagen4A = document.createElement("img");
imagen4A.src="papel.png";
let imagen4B = document.createElement("img");
imagen4B.src="papel.png";

let imagen5A = document.createElement("img");
imagen5A.src="piedra.png";
let imagen5B = document.createElement("img");
imagen5B.src="piedra.png";

let imagen6A = document.createElement("img");
imagen6A.src="tijera.png";
let imagen6B = document.createElement("img");
imagen6B.src="tijera.png";

let imagen7A = document.createElement("img");
imagen7A.src="sfc.jpg";
let imagen7B = document.createElement("img");
imagen7B.src="sfc.jpg";

let imagen8A = document.createElement("img");
imagen8A.src="1.webp";
let imagen8B = document.createElement("img");
imagen8B.src="1.webp";

//CREACION DE IMAGENES NECESARIAS TABLERO B
let imagen1AA = document.createElement("img");
imagen1AA.src="circulo.png";
let imagen1BB = document.createElement("img");
imagen1BB.src="circulo.png";

let imagen2AA = document.createElement("img");
imagen2AA.src="cruz.png";
let imagen2BB = document.createElement("img");
imagen2BB.src="cruz.png";

let imagen3AA= document.createElement("img");
imagen3AA.src="relojSinManillas.png";
let imagen3BB = document.createElement("img");
imagen3BB.src="relojSinManillas.png";

let imagen4AA = document.createElement("img");
imagen4AA.src="papel.png";
let imagen4BB = document.createElement("img");
imagen4BB.src="papel.png";

let imagen5AA = document.createElement("img");
imagen5AA.src="piedra.png";
let imagen5BB = document.createElement("img");
imagen5BB.src="piedra.png";

let imagen6AA = document.createElement("img");
imagen6AA.src="tijera.png";
let imagen6BB = document.createElement("img");
imagen6BB.src="tijera.png";

let imagen7AA = document.createElement("img");
imagen7AA.src="sfc.jpg";
let imagen7BB = document.createElement("img");
imagen7BB.src="sfc.jpg";

let imagen8AA = document.createElement("img");
imagen8AA.src="1.webp";
let imagen8BB = document.createElement("img");
imagen8BB.src="1.webp";

//ARRAY TABLERO A
let contenedoresA =[
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3"),
    document.getElementById("c4"),
    document.getElementById("c5"),
    document.getElementById("c6"),
    document.getElementById("c7"),
    document.getElementById("c8"),
    document.getElementById("c9"),
    document.getElementById("c10"),
    document.getElementById("c11"),
    document.getElementById("c12"),
    document.getElementById("c13"),
    document.getElementById("c14"),
    document.getElementById("c15"),
    document.getElementById("c16")
]

//ARRAY TABLERO B
let contenedoresB =[
    document.getElementById("c17"),
    document.getElementById("c18"),
    document.getElementById("c19"),
    document.getElementById("c20"),
    document.getElementById("c21"),
    document.getElementById("c22"),
    document.getElementById("c23"),
    document.getElementById("c24"),
    document.getElementById("c25"),
    document.getElementById("c26"),
    document.getElementById("c27"),
    document.getElementById("c28"),
    document.getElementById("c29"),
    document.getElementById("c30"),
    document.getElementById("c31"),
    document.getElementById("c32")
]

//ARRAY TABLERO 3 EN RAYA
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

//ESCUCHA DE EVENTO BOTON DE INICIO/REINICIO
botonIni.addEventListener("click", function () {
    iniciar();
})

//ESCUCHA DE EVENTOS JUGADOR A
botonA1.addEventListener("click", function (){
    let turno = 1;
    asignarTablero(turno);
})
    
botonR1.addEventListener("click", function (){
    let turno = 1;
    reiniciar(contenedoresA, turno);
});
    
    
contenedoresA.forEach((contenedor, index) => {
    contenedor.addEventListener("click", function () {
        if (turnoJA) {
            if(!ocupacionA[index]){
                if(contadorPar === 0){
                    imagen1Par = contenedor.querySelector("img");;
                    img1 = contenedor.querySelector("img").src;
                    posicion1 = index;
                    if(imagen1Par){
                        imagen1Par.style.opacity = "1";
                        contadorPar ++;
                    }
                }
                else {
                    imagen2Par = contenedor.querySelector("img");
                    img2 = contenedor.querySelector("img").src;
                    if(imagen2Par){
                        imagen2Par.style.opacity = "1";
                        contadorPar ++;
                    }
                }
                if(contadorPar === 2){
                    setTimeout(() => {
                        if(img1 !== img2){
                            imagen1Par.style.opacity = "0";
                            imagen2Par.style.opacity = "0";
                            mostrarTG.innerText = " B";
                            turnoJB = true;
                            turnoJA = false;
                        } else {
                            ocupacionA[index] = true;
                            ocupacionA[posicion1] = true;
                            partidaGanada = true;
                        }
                        contadorPar = 0;
                    }, 250);
                }
            }       
            
        }
    })
    
});    


//ESCUCHA DE EVENTOS JUGADOR B
botonA2.addEventListener("click", function (){
    let turno = 2;
    asignarTablero(turno);
})

botonR2.addEventListener("click", function (){
    let turno = 2;
    reiniciar(contenedoresB, turno);
});

contenedoresB.forEach((contenedor, index) => {
    contenedor.addEventListener("click", function () {
        if(turnoJB){
            if(!ocupacionB[index]){
                if(contadorParB === 0){
                    imagen1ParB = contenedor.querySelector("img");;
                    img1B = contenedor.querySelector("img").src;
                    posicion1B = index;
                    if(imagen1ParB){
                        imagen1ParB.style.opacity = "1";
                        contadorParB ++;
                    }
                }
                else {
                    imagen2ParB = contenedor.querySelector("img");
                    img2B = contenedor.querySelector("img").src;
                    if(imagen2ParB){
                        imagen2ParB.style.opacity = "1";
                        contadorParB ++;
                    }
                }
                if(contadorParB === 2){
                    setTimeout(() => {
                        if(img1B !== img2B){
                            imagen1ParB.style.opacity = "0";
                            imagen2ParB.style.opacity = "0";  
                            mostrarTG.innerText = " A";
                            turnoJA = true;
                            turnoJB = false;
                        } 
                        else {
                            ocupacionB[index] = true;
                            ocupacionB[posicion1B] = true;
                            partidaGanada = true;
                        }
                        contadorParB = 0;
                    }, 250);
                }
            }     
            
        }
    })
    
});


//ESCUCHA DE EVENTOS 3 EN RAYA 
contenedores.forEach((contenedor, index) => {
    contenedor.addEventListener("click", () =>{
    if(partidaGanada){
        if(!ocupacion[index]) {
            ocupacion[index] = true;
            let imagen
            if(turnoJA){
                tablero[index] = "X";
                imagen = imagenCruz.cloneNode(true);
                contadorCasillasUsadas++;
                contenedor.appendChild(imagen);
                turnoJB = true;
                turnoJA = false;
                mostrarTG.innerText = " B";
            }
            else if (turnoJB){
                tablero[index] = "O";
                imagen = imagenCirculo.cloneNode(true);
                contadorCasillasUsadas ++;
                contenedor.appendChild(imagen);
                turnoJA = true;
                turnoJB = false;
                mostrarTG.innerText = " A";
            }
            
            if (verificarGanador()) {
                if(turnoJA){
                    mostrarTG.innerText = " ";
                    mostrarTG0.innerHTML = "¡Jugador B gana!";
                    partidaGanada = true;
                }
                if(turnoJB){
                    mostrarTG.innerText = " ";
                    mostrarTG0.innerHTML = "¡Jugador A gana!";
                    partidaGanada = true;
                }
            }
            else if (contadorCasillasUsadas === 9) {
                mostrarTG.innerText = " ";
                mostrarTG0.innerHTML = "¡Empate!";
            } 
        }
        partidaGanada = false;
    }
    })
});

//FUNCIONES USADAS
//REINICIAR TABLERO PAREJAS IMAGENES
function reiniciar(contenedores, numeroTablero){
    contenedores.forEach(contenedor => {
        if (numeroTablero == 1) {
            let imagen = contenedor.querySelector("img");
            if (imagen) {
                imagen.style.opacity = "0";
            }
            ocupacionA.fill(false);
            contadorPar = 0;
        }
        else if (numeroTablero == 2) {
            let imagen = contenedor.querySelector("img");
            if (imagen) {
                imagen.style.opacity = "0";
            }
            ocupacionB.fill(false);
            contadorParB = 0;
        }
    }); 
}

//ASIGNAR TABLERO IMAGENES PAREJA ALEATORIO
function asignarTablero(numeroTablero){
    if(numeroTablero === 1){
        let numeros = [];

        while (numeros.length < 16) {
            let numero = Math.floor(Math.random() * 16); 
            if (!numeros.includes(numero)) { 
                numeros.push(numero);
            }
        }
        contenedoresA[numeros[0]].appendChild(imagen1A);
        contenedoresA[numeros[1]].appendChild(imagen1B);
        contenedoresA[numeros[2]].appendChild(imagen2A);
        contenedoresA[numeros[3]].appendChild(imagen2B);
        contenedoresA[numeros[4]].appendChild(imagen3A);
        contenedoresA[numeros[5]].appendChild(imagen3B);
        contenedoresA[numeros[6]].appendChild(imagen4A);
        contenedoresA[numeros[7]].appendChild(imagen4B);
        contenedoresA[numeros[8]].appendChild(imagen5A);
        contenedoresA[numeros[9]].appendChild(imagen5B);
        contenedoresA[numeros[10]].appendChild(imagen6A);
        contenedoresA[numeros[11]].appendChild(imagen6B);
        contenedoresA[numeros[12]].appendChild(imagen7A);
        contenedoresA[numeros[13]].appendChild(imagen7B);
        contenedoresA[numeros[14]].appendChild(imagen8A);
        contenedoresA[numeros[15]].appendChild(imagen8B);
    }
    else if (numeroTablero === 2) {
        let numeros = [];

        while (numeros.length < 16) {
            let numero = Math.floor(Math.random() * 16); 
            if (!numeros.includes(numero)) { 
                numeros.push(numero);
            }
        }

        contenedoresB[numeros[0]].appendChild(imagen1AA);
        contenedoresB[numeros[1]].appendChild(imagen1BB);
        contenedoresB[numeros[2]].appendChild(imagen2AA);
        contenedoresB[numeros[3]].appendChild(imagen2BB);
        contenedoresB[numeros[4]].appendChild(imagen3AA);
        contenedoresB[numeros[5]].appendChild(imagen3BB);
        contenedoresB[numeros[6]].appendChild(imagen4AA);
        contenedoresB[numeros[7]].appendChild(imagen4BB);
        contenedoresB[numeros[8]].appendChild(imagen5AA);
        contenedoresB[numeros[9]].appendChild(imagen5BB);
        contenedoresB[numeros[10]].appendChild(imagen6AA);
        contenedoresB[numeros[11]].appendChild(imagen6BB);
        contenedoresB[numeros[12]].appendChild(imagen7AA);
        contenedoresB[numeros[13]].appendChild(imagen7BB);
        contenedoresB[numeros[14]].appendChild(imagen8AA);
        contenedoresB[numeros[15]].appendChild(imagen8BB);
    }   
}

//VERIFICAR GANADOR EN 3 EN RAYA
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

//INICIAR/ REINICIAR LA PARTIDA GENERAL
function iniciar(){
    //ALEATORIO PARA DESIGNAR TURNO DE INICIO
    let aleatorioTG = Math.floor(Math.random() * 2 + 1);

    //COMPROBACION DEL RESULTADO ANTERIOR PARA ASIGNAR TURNO
    if(aleatorioTG === 1){
        turnoJA = true;
        turnoJB = false;
        mostrarTG0.innerText = "Turno Jugador";
        mostrarTG.innerText = " A";
    }
    else if (aleatorioTG === 2) {
        turnoJB = true;
        turnoJA = false;
        mostrarTG0.innerText = "Turno Jugador";
        mostrarTG.innerText += " B";
    }
    //REINICIOS NECESARIOS
    reiniciar(contenedoresA, 1);
    reiniciar(contenedoresB, 2);
    reiniciarT3R();
}

//REESTABLECER VALORES DEL 3 EN RAYA NECESARIOS PARA EL INICIO DE OTRA PARTIDA.
function reiniciarT3R(){
    contenedores.forEach(element => {
        element.innerHTML = " ";
    });
    ocupacion = Array(9).fill(false);
    tablero = Array(9).fill(null);
    contadorCasillasUsadas = 0;
    partidaGanada = false;
}