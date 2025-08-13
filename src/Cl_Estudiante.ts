export default class Cl_Estudiante {
    private _nombre: string;
    private _edad: number = 0;
    private _sexo: string;
constructor(nombre: string, edad: number, sexo: string) {
    this._nombre = nombre;
    this._edad = edad;
    this._sexo = sexo;
}
set nombre (nombre: string) {
    this._nombre = nombre;
}
get nombre () {
    return this._nombre;
}
set edad (edad: number) {
    this._edad = edad;
}
get edad () {
    return this._edad;
}
set sexo (sexo: string) {
    this._sexo = sexo;
}
get sexo () {
    return this._sexo;
}
}