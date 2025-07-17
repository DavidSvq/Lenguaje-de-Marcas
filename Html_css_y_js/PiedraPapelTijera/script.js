
let pc = document.getElementById("pc");
const opciones = ['piedra', 'papel', 'tijera'];
let resultado = document.getElementById("texto");

addEventListener(onclick, function (){
    jugar();
});

function jugar(opcion){
    let opcionPc = opciones[Math.round(Math.random() * 2)];
    console.log(opcionPc);
    let srcEditado = opcionPc + ".png";
    console.log(srcEditado);
    pc.src =  srcEditado; 
    console.log("Dentro del bucle");

    if(opcion===opcionPc){
        resultado.innerText = 'Empate';
        console.log("Dentro del bucle, opciones iguales");
    }
    else if((opcion =='piedra' && opcionPc == 'tijera') || (opcion =='papel' && opcionPc == 'piedra') || (opcion =='tijera' && opcionPc == 'papel')){
        resultado.innerText = 'Ganaste';
        console.log("Dentro del bucle, gano yo");
    }else{
        resultado.innerText = 'Pierdes';
    }
     
}
