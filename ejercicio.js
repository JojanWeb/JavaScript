// // var

// var gato = "Draco"; // primera declaracion
// gato = "Satanás"; // redeclaro la variable gato
// console.log (gato);

// // let
// let name = "Luisa";

// 	if(true) {
// 		let name = "Jonh";
// 		console.log(name); // Jonh
// 	}

// console.log(name) // Luisa

// //const
// const deporte = "Fútbol";
// console.log( "deporte:" + deporte);

// console.log('Ella dijo: “Adios!”')

// // strings

// texto = "Hola, me llamo Luisa y tengo 15 años";
// texto = "$#2*";
// console.log(texto);

// //Template Strings

// cadena= 'Habia una vez una iguana, \
// con una ruana de lana \
// peinandose la melena';
// console.log(cadena);

// // Numbers
// num=234;
// num=-100;
// num= 60;
// console.log(num);

// function cargar(){
// 	var a = 1;
// 	function CargarA(){
// 		var a = 3;
// 		console.log(a);

// 	}
// 	console.log(a);
// 	CargarA();
// }

// cargar();

// var saludo = undefined

// if (true){
// 	saludo = "hola"
// 	console.log(saludo)
// 	var saludo = "adios"
//   let despedida = "chao"
// }

// console.log(saludo)

// let lista = "<ul></ul>";

// console.log(lista);

// const frase = "Sumergiéndonos en tecnología con Alura"

// const numero = 256
// const convirtiendoEnString = new String(numero)

// const num = 500
// console.log(num.toString()) //'500'

// new Number();
// var a = new Number("123"); // a === 123 es false
// var b = Number("123"); // b === 123 es true
// a instanceof Number; // es true
// b instanceof Number; // es false

// // Notación literal (preferida)
// const number = 4;
// const decimal = 15.8;
// const legibleNumber = 5_000_000;

// // Notación con objetos (evitar)
// const number = new Number(4);
// const decimal = new Number(15.8);
// const letter = new Number("A");

// 5_000_000 === 5000000;    // true

// Number.MAX_VALUE			//Valor más grande
// Number.MIN_VALUE			//Valor más pequeño
// Number.MAX_SAFE_INTEGER 	//Valor seguro más grande
// Number.MIN_SAFE_INTEGER 	//Valor seguro más pequeño
// Number.EPSILON 				//Número muy pequeño: ε

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.EPSILON);

// Number.POSITIVE_INFINITY	//Infinito positivo: +∞
// Number.NEGATIVE_INFINITY	//Infinito negativo: -∞

// result = window.prompt("Ingrese: ");

// if (result == "Hola"){
// 	let otro = window.prompt(`Por que ${result}: `);
// }

// function name() {

// }

// console.log(typeof name);

// const a = 'una cadena';
// if (a) {
//   console.log(a); // arroja 'una cadena'
// }

// const a = 'palabra';
// const b = false;
// const c = true;
// const d = 0
// const e = 1
// const f = 2
// const g = null

// console.log(a || b); // 'palabra'
// console.log(c || a); // true
// console.log(b || a); // 'palabra'
// console.log(e || f); // 1
// console.log(f || e); // 2
// console.log(d || g); // null
// console.log(g || d); // 0
// console.log(a && c); // true
// console.log(c && a); // 'palabra'

// var variable;
// if (typeof variable === "undefined") {
//     console.log('ok');
// }

// var variable;
// if (variable === undefined) {
//     console.log('ok');
// }

// var variable;
// if (typeof variable === undefined) {
//     console.log('ok');  // No se ejecuta
// }

// if (typeof variable === "undefined") {
//     console.log('ok');  // Si se ejecuta
// }

// var variable = null;
// if (variable === null) {
//     console.log('ok');
// }

// var variable = null;
// if (typeof variable === "object") {
//     console.log('ok');
// }

// Math.sqrt(-1);
// parseInt('no');

// let esPrimo = function (numero) {
//   let contador = false;

//   for (let i = 2; i < numero / 2; i++) {
//     if (Math.floor(numero) % i === 0 || numero <= 3) {
//       contador = true;
//       break;
//     }
//   }

//   if (contador === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function almacenarNumero() {
//   var numero = document.getElementById("numero");
//   resultado = esPrimo(parseInt(numero));
//   console.log(resultado);
//   console.log(7 / 2);

//   resultado === true ? alert("Es primo") : alert("No es primo");
// }

// const anonima = function (valor) {
// 	console.log(valor);
// }

// let respuesta = anonima(25);
// console.log(respuesta);

// const generadora = function* nombre(a, b){
// 	yield 1;
// 	yield 2;
// }

// console.log(generadora.next());

// let parametro = "";

// (function () {
//   alert("Si llamarme");
// })();

// const flecha = (a, b, c) => {
// 	if (a>20) return a * b;
// }

// const flecha = (a, b, c) => (a > 20 ? a * b : b);

// let respuesta = flecha(40, 5);

// console.log(respuesta);

// Declaración de la función "saludar"
// function saludar() {
//   // Contenido de la función
//   console.log("Hola, soy una función");
// }

// // Ejecución de la función
// saludar();

// typeof function () {}; // 'function'

// function nombre(p1, p2...) { }

// let nombre = function (p1, p2...) { }

// new Function(p1, p2..., code);

// function saludar() {
//   return "Hola";
// }

// saludar();      // 'Hola'
// typeof saludar; // 'function'

// const saludo = function saludar() {
//   return "Hola";
// };

// saludo(); // 'Hola'

// const saludar = new Function("return 'Hola';");

// saludar(); // 'Hola'

// // Función anónima "saludo"
// const saludo = function () {
//   return "Hola";
// };

// saludo(); // 'Hola'
// saludo; // ƒ () { return 'Hola'; }

// (function () {
//   console.log("Hola!!");
// })();

// (function (name) {
//   console.log(`¡Hola, ${name}!`);
// })("Manz");

// const value = (function (name) {
//   return `¡Hola, ${name}!`;
// })("Manz");

// value; // '¡Hola, Manz!`
// typeof value; // 'string'

// const saludo = function () {
//   console.log(`Hola ${nombre("Yari")} Bonas noches`);
// };

// const nombre = function (name) {
//   return name;
// };

// saludo();

// const incr = (function () {
//   let num = 0;
//   return function () {
//     num++;
//     return num;
//   };
// })();

// const nombreFuncion = (param1, param2) => {
//   // Código
//   return param1 + param2;
// };

// const sumar = (a, b) => a + b;

// console.log(sumar(3, 4)); // 7

// function* generador() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* contador() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// const gen = contador();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1

// async function miFuncion() {
//   return "Hola";
// }

// async function obtenerDatos() {
//   const respuesta = await fetch("https://api.example.com/data");
//   const datos = await respuesta.json();
//   console.log(datos);
// }
// async function cargarDatos() {
//   try {
//     const respuesta = await fetch("https://api.example.com/data");
//     const datos = await respuesta.json();
//     console.log(datos);
//   } catch (error) {
//     console.error("Error al cargar datos:", error);
//   }
// }

// async function saludar() {
//   const promesa = new Promise((resolve) => {
//     setTimeout(() => resolve("Hola, mundo!"), 2000);
//   });

//   const mensaje = await promesa; // Espera 2 segundos.
//   console.log(mensaje); // "Hola, mundo!"
// }

// saludar();

// const mixedTypedArray = [100, true, "freeCodeCamp", {}];

// const salad = ["?", "?", "?", "?", "?", "?", "?"];

// const element = array[index];

// const salad = ["?", "?", "?", "?", "?", "?", "?"];

// for (let i = 0; i < salad.length; i++) {
//   console.log(`Element at index ${i} is ${salad[i]}`);
// }

// const salad = ["?", "?", "?", "?", "?", "?", "?"];
// salad.push("?");

// const ensalada = ["?", "?", "?", "?", "?", "?", "?"];
// const ensaladaCopy = ensalada.slice();

// console.log(ensaladaCopy); // ['?', '?', '?', '?', '?', '?', '?']

// ensalada === ensaladaCopy; // returns false

// let [tomate, hongo, zanahoria] = ["?", "?", "?"];

// console.log(tomate, hongo, zanahoria); // Output, ? ? ?

// let frutas = ["?", "?", "?", "?", ["?", "?", "?"]];

// const veg = frutas[4]; // returns the array ['?', '?', '?']
// const zanahoria = veg[2]; // returns '?'

// fruits[4][2]; // returns '?'

// const objeto = new Object(); // Evitar esta sintaxis en Javascript (no se suele usar)

// const objeto = {}; // Esto es un objeto vacío

// const player = {
//   name: "Manz",
//   life: 99,
//   power: 10,
// };

// // Notación con puntos (preferida)
// console.log(player.name); // Muestra "Manz"
// console.log(player.life); // Muestra 99

// // Notación con corchetes
// console.log(player["name"]); // Muestra "Manz"
// console.log(player["life"]); // Muestra 99

// // Operadores Aritméticos
// let suma = 5 + 3;       // Suma: 8
// let resta = 5 - 3;      // Resta: 2
// let multiplicacion = 5 * 3; // Multiplicación: 15
// let division = 5 / 3;   // División: 1.6667
// let modulo = 5 % 3;     // Módulo: 2
// let incremento = 5; incremento++; // Incremento: 6
// let decremento = 5; decremento--; // Decremento: 4

// // Operadores de Asignación
// let asignacion = 5;
// asignacion += 3; // Suma y asignación: 8
// asignacion -= 2; // Resta y asignación: 6
// asignacion *= 2; // Multiplicación y asignación: 12
// asignacion /= 3; // División y asignación: 4
// asignacion %= 3; // Módulo y asignación: 1

// // Operadores de Comparación
// let igual = (5 == "5");      // Igual a: true
// let noIgual = (5 != "5");    // No igual a: false
// let igualEstricto = (5 === "5"); // Igual estrictamente: false
// let noIgualEstricto = (5 !== "5"); // No igual estrictamente: true
// let mayorQue = (5 > 3);      // Mayor que: true
// let menorQue = (5 < 3);      // Menor que: false
// let mayorOIgualQue = (5 >= 5); // Mayor o igual que: true
// let menorOIgualQue = (5 <= 5); // Menor o igual que: true

// // Operadores Lógicos
// let andLogico = (true && false); // AND lógico: false
// let orLogico = (true || false); // OR lógico: true
// let notLogico = !true;           // NOT lógico: false

// // Operadores de Bit a Bit (Bitwise)
// let andBit = (5 & 3);  // AND bit a bit: 1
// let orBit = (5 | 3);   // OR bit a bit: 7
// let xorBit = (5 ^ 3);  // XOR bit a bit: 6
// let notBit = ~5;       // NOT bit a bit: -6
// let desplIzq = (5 << 1); // Desplazamiento a la izquierda: 10
// let desplDer = (5 >> 1); // Desplazamiento a la derecha: 2
// let desplDerSinSigno = (5 >>> 1); // Desplazamiento a la derecha sin signo: 2

// // Otros Operadores
// let tipo = typeof 5;  // typeof: "number"
// let instancia = [] instanceof Array; // instanceof: true
// let operadorTernario = (5 > 3) ? "Mayor" : "Menor"; // Operador ternario: "Mayor"

// const Persona = {
//   name: "Johan",
//   apellido: "Delgado"

// }

// Persona.pais = "Colombia";

// Persona.mostrarPais = (function () {
//   return `Mi pais es ${this.pais}`;
// })

// console.log(Persona);

// // If-Else
// let numero = 5;
// if (numero > 0) {
//     console.log("El número es positivo");
// } else {
//     console.log("El número es negativo");
// }

// // Else If
// let hora = 10;
// if (hora < 12) {
//     console.log("Buenos días");
// } else if (hora < 18) {
//     console.log("Buenas tardes");
// } else {
//     console.log("Buenas noches");
// }

// // Ternario
// let edad = 18;
// let esMayorDeEdad = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
// console.log(esMayorDeEdad);

// // Try-Catch
// try {
//     let resultado = noExiste / 10; // Esto lanzará un error porque 'noExiste' no está definida
// } catch (error) {
//     console.log("Se ha producido un error: " + error.message);
// }

// let a = 25;
// let b = 2;
// let c = 7;

// let resultado = a + (b + (b - a) * a) / c;

// console.log(resultado);

// if (typeof (a && b) === "number" ) {
//   console.log(a + b);
// }
// else{
//   console.log("False");

// }

// // While
// let contador = 0;
// while (contador < 5) {
//     console.log("Contador (while): " + contador);
//     contador++;
// }

// // Do-While
// let num = 0;
// do {
//     console.log("Número (do-while): " + num);
//     num++;
// } while (num < 5);

// // For
// for (let i = 0; i < 5; i++) {
//     console.log("Índice (for): " + i);
// }

// // For-In
// const objeto = {a: 1, b: 2, c: 3};
// for (let propiedad in objeto) {
//     console.log("Propiedad (for-in): " + propiedad + " = " + objeto[propiedad]);
// }

// // For-Of
// const array = [1, 2, 3, 4, 5];
// for (let valor of array) {
//     console.log("Valor (for-of): " + valor);
// }

// // Try-Catch
// try {
//   let resultado = 10 / 0; // Esto no lanzará un error, pero resultado será Infinity
//   console.log(resultado);
//   let error = noExiste; // Esto lanzará un error porque 'noExiste' no está definida
// } catch (error) {
//   console.log("Se ha producido un error: " + error.message);
// }

// // Finally
// try {
//   let resultado = 10 / 0;
//   console.log(resultado);
// } catch (error) {
//   console.log("Se ha producido un error: " + error.message);
// } finally {
//   console.log("Este bloque siempre se ejecutará");
// }

// // Throw
// try {
//   let edad = -5;
//   if (edad < 0) {
//       throw new Error("La edad no puede ser negativa");
//   }
// } catch (error) {
//   console.log("Se ha producido un error: " + error.message);
// } finally {
//   console.log("Validación de edad completada");
// }

// // Break
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//       break; // Sale del ciclo cuando i es igual a 5
//   }
//   console.log("Valor con break: " + i);
// }

// // Continue
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//       continue; // Salta la iteración actual si i es un número par
//   }
//   console.log("Valor con continue: " + i);
// }

// // Switch
// let dia = 3;
// switch (dia) {
//     case 0:
//         console.log("Domingo");
//         break;
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miércoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sábado");
//         break;
//     default:
//         console.log("Día inválido");
// }

// let contador = 0;
// for (let i = 0; contador <= 20; i++) {
//   if(i % 2 === 0){
//     console.log(i);
//     contador++;
//   }
// }

// for (let i = 0; i <= 20; i++) {
//   console.log(i * 2);
//   if (i == 4) {
//     console.log(9);
//   }
// }





