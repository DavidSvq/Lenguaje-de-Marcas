let cantidadConvertir;

let botonKm = document.getElementById("u1");
let botonKmEstado = false;

let botonMetro = document.getElementById("u2");
let botonMetroEstado = false;

let botonCenti = document.getElementById("u3");
let botonCentiEstado = false;

let botonMilla = document. getElementById("u4");
let botonMillaEstado = false;

let botonKmB = document.getElementById("u5");
let botonKmEstadoB = false;

let botonMetroB = document.getElementById("u6");
let botonMetroEstadoB = false;

let botonCentiB = document.getElementById("u7");
let botonCentiEstadoB = false;

let botonMillaB = document. getElementById("u8");
let botonMillaEstadoB = false;

let botonConvertir = document.getElementById("conver");

let resultado = document.getElementById("r")



botonKm.addEventListener("click", function(){
    botonKmEstado = true;
    botonMetroEstado = false;
    botonCentiEstado = false;
    botonMillaEstado = false;
    console.log("pulsado km");
    botonKm.style.color = "blue";
    botonMetro.style.color = "black";
    botonCenti.style.color = "black";
    botonMilla.style.color = "black";
});

botonMetro.addEventListener("click", function(){
    botonMetroEstado = true;
    botonKmEstado = false;
    botonCentiEstado = false;
    botonMillaEstado = false;
    console.log("pulsado metro");
    botonMetro.style.color = "blue";
    botonKm.style.color = "black";
    botonCenti.style.color = "black";
    botonMilla.style.color = "black";
});

botonCenti.addEventListener("click", function(){
    botonCentiEstado = true;
    botonKmEstado = false;
    botonMetroEstado = false;
    botonMillaEstado = false;
    console.log("pulsado centi");
    botonCenti.style.color = "blue";
    botonMetro.style.color = "black";
    botonKm.style.color = "black";
    botonMilla.style.color = "black";
});

botonMilla.addEventListener("click", function(){
    botonMetroEstado = false;
    botonKmEstado = false;
    botonCentiEstado = false;
    botonMillaEstado = true;
    console.log("pulsado milla");
    botonMilla.style.color = "blue";
    botonMetro.style.color = "black";
    botonCenti.style.color = "black";
    botonKm.style.color = "black";
});

botonKmB.addEventListener("click", function(){
    botonKmEstadoB = true;
    botonMetroEstadoB = false;
    botonCentiEstadoB = false;
    botonMillaEstadoB = false;
    console.log("pulsado km");
    botonKmB.style.color = "blue";
    botonMetroB.style.color = "black";
    botonCentiB.style.color = "black";
    botonMillaB.style.color = "black";
});

botonMetroB.addEventListener("click", function(){
    botonMetroEstadoB = true;
    botonKmEstadoB = false;
    botonCentiEstadoB = false;
    botonMillaEstadoB = false;
    console.log("pulsado metro");
    botonMetroB.style.color = "blue";
    botonKmB.style.color = "black";
    botonCentiB.style.color = "black";
    botonMillaB.style.color = "black";
});

botonCentiB.addEventListener("click", function(){
    botonCentiEstadoB = true;
    botonKmEstadoB = false;
    botonMetroEstadoB = false;
    botonMillaEstadoB = false;
    console.log("pulsado centi");
    botonCentiB.style.color = "blue";
    botonMetroB.style.color = "black";
    botonKmB.style.color = "black";
    botonMillaB.style.color = "black";
});

botonMillaB.addEventListener("click", function(){
    botonMetroEstadoB = false;
    botonKmEstadoB = false;
    botonCentiEstadoB = false;
    botonMillaEstadoB = true;
    console.log("pulsado milla");
    botonMillaB.style.color = "blue";
    botonMetroB.style.color = "black";
    botonCentiB.style.color = "black";
    botonKmB.style.color = "black";
});

botonConvertir.addEventListener("click", function (){
    cantidadConvertir = document.getElementById("cantidadAConvertir");
    console.log(cantidadConvertir.value);
    let valorA = cantidadConvertir.value;
    let valor;
    if(botonKmEstado && !botonKmEstadoB){
        if(botonMetroEstadoB){
            
            valor= valorA * 1000;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonCentiEstadoB){
            valor = valorA * 100000;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonMillaEstadoB){
            valor = valorA /1.6;
            console.log(valor);
            resultado.innerHTML = valor;
        }
    }
    if(botonCentiEstado && !botonCentiEstadoB){
        if(botonKmEstadoB){
            valor= valorA / 100000;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonMetroEstadoB){
            valor = valorA / 1000;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonMillaEstadoB){
            valor = valorA / 100 / 1600;
            console.log(valor);
            resultado.innerHTML = valor;
        }
    }
    if(botonMetroEstado && !botonMetroEstadoB){
        if(botonKmEstadoB){
            valor= valorA / 1000;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonCentiEstadoB){
            valor = valorA / 100;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonMillaEstadoB){
            valor = valorA / 1600;
            console.log(valor);
            resultado.innerHTML = valor;
        }
    }
    if(botonMillaEstado && !botonMillaEstadoB){
        if(botonKmEstadoB){
            valor= valorA * 1.6;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonCentiEstadoB){
            valor = valorA * 100 *1600;
            console.log(valor);
            resultado.innerHTML = valor;
        }
        if(botonMetroEstadoB){
            valor = valorA * 1600;
            console.log(valor);
            resultado.innerHTML = valor;
        }
    } 
})