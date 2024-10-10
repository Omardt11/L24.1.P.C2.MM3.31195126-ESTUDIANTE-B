export default class Cl_estudiante {
    constructor(nombre, acumNotas, cantMaterias ){
        this.acumNotas = acumNotas;
        this.nombre = nombre;
        this.cantMaterias = cantMaterias;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set acumNotas(an){
        this._acumNotas = +an;
    }
    get acumNotas(){
        return this._acumNotas;
    }
    set cantMaterias(cm){
        this._cantMaterias = +cm;
    }
    get cantMaterias(){
        return this._cantMaterias;
    }
    promNotas(){
        return this.acumNotas / this.cantMaterias;
    }
}