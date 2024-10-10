/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa
con 19 años y promedio mínimo de 12 (1=beisbol - 2=fútbol). Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
estudiante y reporte si es admitido en el equipo que solicita.
Ejemplos de la corrida:
Nombre del estudiante: Juan
Acumulado de notas: 132
Cantidad de materias: 8
Deporte (1=beisbol - 2=fútbol): 1
Edad: 21
Nota promedio: 16.50
Juan es admitido en beisbol
Nombre del estudiante: Félix
Acumulado de notas: 110
Cantidad de materias: 10
Deporte (1=beisbol - 2=fútbol): 2
Edad: 20
Nota promedio: 11.00
Félix no es admitido en fútbol*/

import Cl_deportista from "./Cl_deportista.js";

let deportista1 = new Cl_deportista("juan", 132, 8, 21, 1);
let deportista2 = new Cl_deportista("Félix", 110, 10, 20, 2);

let salida =document.getElementById("salida");

salida.innerHTML ="Nombre del estudiante: "+deportista1.nombre;
salida.innerHTML +="<br>Acumulado de notas: "+deportista1.acumNotas;
salida.innerHTML +="<br>Cantidad de materias: "+deportista1.cantMaterias;
salida.innerHTML +="<br>Deporte (1=beisbol - 2=fútbol): "+deportista1.depSolicitado;
salida.innerHTML +="<br>Edad: "+deportista1.edad;
salida.innerHTML +="<br>Nota promedio: "+deportista1.promNotas();
if (deportista1.admicion == "si") {
    salida.innerHTML += "<br>"+deportista1.nombre+" es admitido en ";
        if(deportista1.depSolicitado == 1)
            salida.innerHTML += "beisbol";
        else
            salida.innerHTML += "futbol";
}
else{
    salida.innerHTML += "<br>"+deportista1.nombre+" no es admitido en ";
    if (deportista1.depSolicitado == 1) {
        salida.innerHTML += "beisbol";
    } else {
        salida.innerHTML += "futbol";
    }
}
salida.innerHTML +="<br><br>Nombre del estudiante: "+deportista2.nombre;
salida.innerHTML +="<br>Acumulado de notas: "+deportista2.acumNotas;
salida.innerHTML +="<br>Cantidad de materias: "+deportista2.cantMaterias;
salida.innerHTML +="<br>Deporte (1=beisbol - 2=fútbol): "+deportista2.depSolicitado;
salida.innerHTML +="<br>Edad: "+deportista2.edad;
salida.innerHTML +="<br>Nota promedio: "+deportista2.promNotas();
if (deportista2.admicion == "si") {
    salida.innerHTML += "<br>"+deportista2.nombre+" es admitido en ";
        if(deportista2.depSolicitado == 1)
            salida.innerHTML += "beisbol";
        else
            salida.innerHTML += "futbol";
}
else{
    salida.innerHTML += "<br>"+deportista2.nombre+" no es admitido en ";
    if (deportista2.depSolicitado == 1) {
        salida.innerHTML += "beisbol";
    } else {
        salida.innerHTML += "futbol";
    }
}