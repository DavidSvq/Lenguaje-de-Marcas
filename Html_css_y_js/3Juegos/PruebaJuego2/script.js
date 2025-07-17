let contadorPar =  0;
let imagen1Par;
let imagen2Par;
let img1;
let img2;
let posicion1;
let contadorFallos = 5;
let vecesIntentado = 0;
let contadorParejas = 0;
let derrota = false;
let ocupacion = Array(16).fill(false);
let botonR = document.getElementById("reinicio");
let botonA = document.getElementById("asignar");

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

let contenedores =[
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

botonA.addEventListener("click", function (){
    asignarTablero();
    vecesIntentado = 0;
    document.getElementById("f2").innerText = vecesIntentado;
})

botonR.addEventListener("click", function (){
    reiniciar();
    vecesIntentado ++;
    document.getElementById("f2").innerText = vecesIntentado;

});


contenedores.forEach((contenedor, index) => {
    contenedor.addEventListener("click", function () {
        if(!derrota){
            if(!ocupacion[index]){
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
                            contadorFallos--;
                            if(contadorFallos < 1){
                                derrota = true;
                                document.getElementById("f").innerText = " 0 Te dormiste, cara alpiste.";
                            }else{
                            document.getElementById("f").innerText = contadorFallos;
                            }
                        } else {
                            ocupacion[index] = true;
                            ocupacion[posicion1] = true;
                            contadorParejas ++;
                            if (contadorParejas === 8){
                                document.getElementById("f3").innerText = " Enhorabuena. Lo lograste.";  
                            }
                            
                            
                        }
                        contadorPar = 0;
                    }, 250);
                }
            }
        }
    })
    
});

function reiniciar(){
    contenedores.forEach(contenedor => {
        let imagen = contenedor.querySelector("img");
        if (imagen) {
            imagen.style.opacity = "0";
        }
    });
    ocupacion.fill(false);
    contadorPar = 0;
    contadorFallos = 5
    document.getElementById("f").innerText = "5";
    derrota = false;
    contadorParejas = 0;
    document.getElementById("f3").innerText = " ";

}

function asignarTablero(){
    let numeros = [];

    while (numeros.length < 16) {
        let numero = Math.floor(Math.random() * 16); 
        if (!numeros.includes(numero)) { 
            numeros.push(numero);
        }
    }
 
    contenedores[numeros[0]].appendChild(imagen1A);
    contenedores[numeros[1]].appendChild(imagen1B);
    contenedores[numeros[2]].appendChild(imagen2A);
    contenedores[numeros[3]].appendChild(imagen2B);
    contenedores[numeros[4]].appendChild(imagen3A);
    contenedores[numeros[5]].appendChild(imagen3B);
    contenedores[numeros[6]].appendChild(imagen4A);
    contenedores[numeros[7]].appendChild(imagen4B);
    contenedores[numeros[8]].appendChild(imagen5A);
    contenedores[numeros[9]].appendChild(imagen5B);
    contenedores[numeros[10]].appendChild(imagen6A);
    contenedores[numeros[11]].appendChild(imagen6B);
    contenedores[numeros[12]].appendChild(imagen7A);
    contenedores[numeros[13]].appendChild(imagen7B);
    contenedores[numeros[14]].appendChild(imagen8A);
    contenedores[numeros[15]].appendChild(imagen8B);
    
    
}


