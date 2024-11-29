

function divisores(numero) {
    const listaDivisores = [];
    for (let i = 1; i <= numero/2; i++) {
        if (numero % i === 0){
            listaDivisores.push(i);
        }
    } 
    return listaDivisores;
}

function sumarArray(listaArray) {
    console.log(listaArray);
    console.log(listaArray.length);
    
    let sumaArray = 0;
    for (let i = 0; i < listaArray.length; i++) {
        sumaArray += listaArray[i];
    }
    return sumaArray; 
}

const numAmigos = (numero, sumaDivisores){
    if (sumaDivisores[0] === numero[1] && sumaDivisores[1] === numero[0]) {
        return true;
    }else{
        return false;
    }
}

let sumaDivisores = [];
let numero = []
for (let i = 1; i < 3; i++) {
    numero.push(parseInt(prompt(`Ingrese el numero ${i}: `)))
    let listaDivisores = divisores(numero[i - 1]);
    sumaDivisores.push(sumaArray(listaDivisores));
}

const numerosAmigos = numAmigos(numero, sumaDivisores);

if (numerosAmigos) {
    alert("NUMEROS AMIGOS");
}else{
    alert("NO NUMEROS AMIGOS");
}

// const Amigos = (a,b) =>{
//     let sumaDivisoresA = 0;
//     for (let i = 1; i <= a/2; i++) {
//         if (a % i === 0) sumaDivisoresA += i;
//     }

//     let sumaDivisoresB = 0;
//     for (let i = 1; i <= b/2; i++) {
//         if (b % i === 0) sumaDivisoresB += i;
//     }

//     if (sumaDivisoresA === a) {
//         console.log("Son numeros perfectos");
//     }else{
//         console.log("NO");
//     }
// }

// Amigos(6,284);