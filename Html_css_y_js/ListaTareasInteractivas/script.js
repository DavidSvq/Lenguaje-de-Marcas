
const textoNuevaTarea = document.getElementById("descripcionTarea");
const botonAgregarTarea = document.getElementById("AgregarTarea");
const listaDeTareas = document.getElementById("listaTareas");

botonAgregarTarea.addEventListener("click",agregarTarea);



function agregarTarea(){
    
    const contenedorBotones = document.createElement('div');

    const botonTareaCompletada = document.createElement('button');
    botonTareaCompletada.textContent="Completada";
    botonTareaCompletada.type = "button";

    const botonEliminarTarea = document.createElement('button');
    botonEliminarTarea.textContent="Eliminar";
    botonEliminarTarea.type = "button";

    contenedorBotones.appendChild(botonTareaCompletada);
    contenedorBotones.appendChild(botonEliminarTarea);
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoNuevaTarea.value;
    listaDeTareas.appendChild(nuevaTarea);
    nuevaTarea.appendChild(contenedorBotones);

    botonTareaCompletada.addEventListener("click", () =>  marcarCompletada(nuevaTarea));
    botonEliminarTarea.addEventListener("click", () => eliminar(nuevaTarea));

    textoNuevaTarea.value = "";
}

function marcarCompletada(elemento){
    elemento.classList.toggle("tachado");
}

function eliminar(elemento){
    listaDeTareas.removeChild(elemento);
}