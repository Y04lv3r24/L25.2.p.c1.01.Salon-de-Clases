export default class Cl_Estudiante {
    constructor(nombre, edad, sexo) {
        this._edad = 0;
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
}
