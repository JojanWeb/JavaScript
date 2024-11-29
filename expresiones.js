let palabra = "123??aje"

let regex = /^([0-9]{2,3}).+([a-z]{2,3})$/g;
// .+ hace que busque cualquier caracter mas de una vez
console.log(regex.test(palabra));
console.log(palabra.match(regex));  



// const buscar = (regex,palabra) => {
//     if (palabra.includes(regex)) {
//         return true
//     }   
// }

// if (buscar(regex,palabra)){
//     console.log("Contiene");
// }else{
//     console.log("No contiene");
// }