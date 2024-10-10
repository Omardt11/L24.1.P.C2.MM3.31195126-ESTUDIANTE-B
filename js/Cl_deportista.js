import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_deportista extends Cl_estudiante{
    constructor(nombre, acumNotas, cantMaterias, edad, depSolicitado){
        super(nombre, acumNotas, cantMaterias)
        this._edad = edad;
        this.depSolicitado = depSolicitado;
    }
    set edad(e){
        this._edad = +e;
    }
    get edad(){
        return this._edad;
    }
    set depSolicitado(ds){
        this._depSolicitado = +ds;
    }
    get depSolicitado(){
        return this._depSolicitado;
    }
    admicion(){
        if(this.depSolicitado == 1){
            if(this.promNotas() > 14)
                if(this.edad > 21)
                    return "si";
        }
        else
        return "no";
        if (this.depSolicitado == 2) {
            if(this.promNotas() >= 12 )
                if(this.edad > 19)
                    return "si";
        } 
        else 
        return "no";
    }
}