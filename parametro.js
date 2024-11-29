// function suma(a, b, ...c) {
//     let sumaC = 0;
//     c.push(a,b);
//     sumaNumeros = 0;
//     for (const numero of c) {
//         if (typeof numero === "number") sumaNumeros += numero;
//     }
//     return sumaNumeros;
// }

// let resultado = suma("dos", 9, 21, 1, 5, 4, 8, 9)
// console.log(resultado);

const arrayA = [1, 2, 3];
const arrayB = ["a", "b", "c"];

const arrayC = [...arrayA, ...arrayB];

console.log(arrayC);

