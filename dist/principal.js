/** SALÓN DE CLASES
    Sea un salón de clases en el DCyT, donde se procesan los datos de cada estudiante (nombre,
edad y sexo). El dato sexo es una letra F o M (femenino - masculino). Se desean procesar estos
registros de estudiantes para determinar: a. la edad promedio, b. el nombre del estudiante con
mayor edad, c. el porcentaje de chicas que son mayor de edad.
El profesor informa que si asisten Luis (16), Ana (19), José (20) y Carmen (18), la salida
requerida presenta el siguiente formato:
Edad promedio: 18.25
Estudiante con mayor edad: José
Porcentaje de chicas mayor de edad: 100%
*/
import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_SalonClases from "./Cl_SalonClases.js";
let estudiante1 = new Cl_Estudiante("Luis", 16, "M");
let estudiante2 = new Cl_Estudiante("Ana", 19, "F");
let estudiante3 = new Cl_Estudiante("José", 20, "M");
let estudiante4 = new Cl_Estudiante("Carmen", 18, "F");
let salonClases = new Cl_SalonClases();
salonClases.procesarEstudiantes(estudiante1);
salonClases.procesarEstudiantes(estudiante2);
salonClases.procesarEstudiantes(estudiante3);
salonClases.procesarEstudiantes(estudiante4);
let salida = document.getElementById("salida");
if (salida) {
    salida.innerHTML += `<p>La Edad promedio es: ${salonClases.edadPromedio()}</p>`;
    salida.innerHTML += `<p>El Estudiante con la mayor edad es: ${salonClases.estudianteMayorEdad()}</p>`;
    salida.innerHTML += `<p> El Porcentaje de chicas que son mayores de edad es: ${salonClases.porcentajeMujeresMayoresDeEdad()}</p>`;
}
else {
    console.log("No se pudo obtener el elemento con id 'salida'");
}
