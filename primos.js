// function esPrimo(numero) { 
//     if (numero < 2) return false;
//     for (let i = 2; i <= numero/2; i++) {
//       if (numero % i === 0) return false;
//     }
//     return true;
//   }
  
//   let llenar = cantidad => {
//     try{
//       if (cantidad < 0) throw new("La cantidad ingresada no es un numero natural");
  
//       let primos = [];
//       for (let numero = 0; primos.length < cantidad; numero++) {
//         if (esPrimo(numero) === true && numero >= 2) {
//           primos.push(numero);
//         }
//       }
//       return primos;
//     }catch (error){
//       console.log(error);
//     }
//   }
  
//   let primos = llenar(parseInt(prompt("Ingrese la cantidad de numeros primos: ")));
//   for (let i = 0; i < primos.length; i++) {
//     console.log(primos[i]);
    
//   }


//   let primo = 0;
// for (let i = 2; primo < 30; i++) {
//   let divisores = 0;
//   for (let a = 1; a <= i; a++) {
//     if (i % a === 0) {
//       divisores++;
//     }
//   }
//   if (divisores === 2) {
//     console.log(i);
//     primo++;
//   }
// }

// let numero = [1,2,3,4];

// let [a,b,c,d] = numero;

// console.log(numero);


// const Persona = {
//     nombre : "Johan",
//     apellido : "Delgado"
// }

// let {nombre:a2, apellido, username = "Zzaibor"} = Persona;

// console.log(Persona);
