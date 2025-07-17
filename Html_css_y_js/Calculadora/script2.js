let pantalla = ""; // Variable para guardar los botones (numeros u operadores) pulsados.

let resultadoMostrado = false; //Variable usada para actuar en consecuencia tras pulsar el igual para obtener un resultado,
                                // borrandose la pantalla en caso de introducir un número y no un operador o botón funcional


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
 * === La comparación es más extricta, es decir no realiza reconversión, por ejemplo 5==="5", daria false ya que uno es String y el otro entero"
 * 
 * Function("return " + ........)(); Clase existente en JS, que aparte de ser un constructor tiene métodos que permite extraer las operaciones 
 * mátematicas de un string.Acepta +(suma) -(resta) *(multiplicación) /(división) %(resto) **(potencia)
 * 
 * (Rebanadas o trozos de String) .slice(pocisión inicial, posición final) Se usa para acceder por indices a un String, acepta numeros negativos para descontar desde el final.
 *
 * String(numero) para convertir un número a String
 * Number(String) para convertir un string a número(Siempre que solo haya números en formato String, sin letras)
 * 
 * try {} catch{} al igual que en Java se usa para manejar excepciones/errores.
 */

function agregarSiguiente(elemento){
    const valor = elemento.innerText;
        if (["+", "-", "*", "/", "=", "R", "C", "%", "^"].includes(valor)) {
            if (valor === "=") {
                try{
                    pantalla = Function("return " + pantalla)(); // Calculamos el resultado
                    resultadoMostrado = true;
                }
                catch{
                    pantalla = "Error";
                }
            }
            else if(valor === "C"){ //Reiniciamos la pantalla
                pantalla = " ";
                resultadoMostrado = false;
            }
            else if(valor === "R"){ //Borra el ultimo botón pulsado
                pantalla = pantalla.slice(0, -1);
                resultadoMostrado = false;
            }
            else if(valor === "%"){ //Divide entre 100 y prepara la multiplicación para calcular su porcentaje con el siguiente numero
                pantalla = String(Number(pantalla)/100);
                pantalla = pantalla + " * ";
                resultadoMostrado = false;
            }
            else if(valor === "^"){ //Realiza el cuadrado del numero
                pantalla = Number(pantalla);
                pantalla = pantalla * pantalla;
                pantalla = String(pantalla);
                resultadoMostrado = false;
            } else {
                pantalla += " " + valor + " "; // Agregamos el operador con espacios, que acepta Function
                resultadoMostrado = false;
            }
        } else{
            if(resultadoMostrado){
                pantalla = ' ';
                resultadoMostrado = false;
            }
            pantalla += valor; // Agregamos números a la expresión
        }
        

        document.querySelector(".resultado").innerText = pantalla;

    }