/**
 * Calentamiento con la conexión de un solo boton
 */

//const b1 = document.getElementById("b1");//

/*b1.addEventListener("click", () => {
    document.querySelector(".resultado").innerText = b1.innerText;
    console.log("Texto del botón:", b1.innerText);
});*/

/*b1.addEventListener("click", () => agregarSiguiente(b1));

function agregarSiguiente(elemento){
    document.querySelector(".resultado").innerText = elemento.innerText;
    console.log("Texto del botón:", elemento.innerText);
}*/

let pantalla = "";
let resultadoMostrado = false;


/**
 * se puede aplicar un bucle forEach con esta nomenclatura:
 * 
 *      querySelectorAll seleccionas todos los tipos de elementos expecificados (en este caso botones).
 *      El patron es igual que en java, primero el elemento y despues los elementos a recorrer
 *      que en este caso es una escucha de eventos asociados a cada elemento (en este caso button)
 *      que ya teniamos para un solo boton.
 */


document.querySelectorAll("button").forEach(boton => {
    boton.addEventListener("click", () => {console.log("Botón presionado:", boton.innerText),agregarSiguiente(boton)});
});


/***
 * == Castea los datos, por ejemplo 5 == "5", devuelve true porque antes de comparar convierte el String a entero.Es decir compara,
 *    sin importar el tipo de dato ya que es reconvertido antes de la comparación.
 * 
 * === La comparación es más extricta, es decir no realiza reconversión, por ejemplo 5 === "5", daria false ya que uno es String y el otro entero"
 * 
 * Function("return " + ........)(); Clase existente en JS, que aparte de ser un constructor tiene métodos que permite extraer las operaciones 
 * mátematicas de un string.
 * 
 * .slice(pocisión inicial, posición final) Se usa para acceder por indices a un String, acepta numeros negativos para descontar desde el final.
 *
 */

function agregarSiguiente(elemento){
    const valor = elemento.innerText;
        if (["+", "-", "*", "/", "="].includes(valor)) {
            if (valor === "=") {
                pantalla = Function("return " + pantalla)(); // Calculamos el resultado
                resultadoMostrado = true;
            } else {
                pantalla += " " + valor + " "; // Agregamos el operador con espacios
                resultadoMostrado = false;
            }
        } else if(valor !== "R"){
            if(resultadoMostrado){
                pantalla = ' ';
                resultadoMostrado = false;
            }
            pantalla += valor; // Agregamos números a la expresión
        }
        if(valor === "C"){
            pantalla = " ";
        }
        else if(valor === "R"){
            //console.log("Pantalla antes de borrar:", pantalla);
            pantalla = pantalla.slice(0, -1);
            //console.log("Pantalla después de borrar:", pantalla);
        }
        else if(valor === "%"){
            pantalla = pantalla.slice(0, -1);
            //console.log("Pantalla antes  de dividir", pantalla);
            pantalla = String(Number(pantalla)/100);
            //console.log("Pantalla despues  de dividir", pantalla);
            pantalla = pantalla + " * ";
        }
        else if(valor === "^"){
            pantalla = pantalla.slice(0, -1);
            //console.log("Pantalla antes", pantalla);
            pantalla = Number(pantalla);
            pantalla = pantalla * pantalla;
            //console.log("Pantalla despues ", pantalla);
            pantalla = String(pantalla);
        }

        document.querySelector(".resultado").innerText = pantalla;
        //console.log("Expresión actual:", pantalla);
    }

    /***
     * 
     * Llegado este punto me encuentro con problemas al detectar los botones funcionales(cuadrado y porcentaje)
     * tras pulsar el igual.
     * Paso al scritp2 para intentar unificar los botones fucionales dentro del primer if junto al resto de 
     * operadores matemáticos.
     */