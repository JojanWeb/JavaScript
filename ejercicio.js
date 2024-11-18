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

let esPrimo = function (numero) {
	let contador = false;
	
	for (let i = 2; i < numero/2 ; i++) {
		if (Math.floor(numero) % i === 0 || numero <= 3){
			contador = true;
			break;
		}
	}
	
	if (contador === 0){
		return true;
	}else{
		return false;
	}
}

function almacenarNumero() {
	var numero = document.getElementById("numero");
	resultado = esPrimo(parseInt(numero));
	console.log(resultado);
	console.log(7/2);
	
	
	resultado === true ? alert("Es primo") : alert("No es primo");
}

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

let parametro = "";

(function (){
	alert("Si llamarme")
})()

// const flecha = (a, b, c) => {
// 	if (a>20) return a * b;
// }

const flecha = (a, b, c) => (a>20) ? a * b: b;


let respuesta = flecha(40,5);

console.log(respuesta);
