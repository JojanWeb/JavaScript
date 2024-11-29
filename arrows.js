class Persona{
    constructor(nombreA,apellidoA, edadA){
        this.nombre = nombreA;
        this.apellido =  apellidoA;
        this.edad = edadA;
    }
    comer () {
        console.log(`${this.nombre} esta comiendo una empanada`);
        
    }
}

class Aprendiz extends Persona{
    estudiar() {
        console.log(`${this.nombre} Esta estudiando`);
        
    }
}

const saray = new Persona("Saray", "Estupiñan", "20")

console.log(saray);
saray.comer();



