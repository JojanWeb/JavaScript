import {esPrimo, llenado} from "./exportar.js";

let numero = parseInt(prompt("Ingrese el numero a evaluar: "));

let respuesta = esPrimo(numero);
let respuestaLlenado = llenado(numero);

alert(respuesta);
alert(respuestaLlenado);


