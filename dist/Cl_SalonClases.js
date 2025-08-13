export default class Cl_SalonClases {
    constructor() {
        this._cntEstudiantes = 0;
        this._cntEstudiantesMujeres = 0;
        this._cntMujeresMayoresEdad = 0;
        this._acEdad = 0;
        this._nombreEstudianteMayorEdad = "";
        this._auxEdadMayor = 0;
    }
    procesarEstudiantes(e) {
        // Contador de estudiantes
        this._cntEstudiantes++;
        //Contador de estudiantes mujeres
        if (e.sexo == "F") {
            this._cntEstudiantesMujeres++;
        }
        //Contador de mujeres mayores de edad
        if (e.sexo == "F" && e.edad >= 18) {
            this._cntMujeresMayoresEdad++;
        }
        //Acumulador de edad
        this._acEdad += e.edad;
        //Estudiante con mayor edad
        if (e.edad > this._auxEdadMayor) {
            this._auxEdadMayor = e.edad;
            this._nombreEstudianteMayorEdad = e.nombre;
        }
    }
    edadPromedio() {
        return this._acEdad / this._cntEstudiantes;
    }
    estudianteMayorEdad() {
        return this._nombreEstudianteMayorEdad;
    }
    porcentajeMujeresMayoresDeEdad() {
        return (this._cntMujeresMayoresEdad / this._cntEstudiantesMujeres) * 100;
    }
}
