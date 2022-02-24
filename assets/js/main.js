document.querySelector("#titulo").innerHTML = '<p>Estadisticas centro medico ñuñoa</p>';

// Funciones utilizadas --------------------------------------------------------------------------

// Creacion del texto que recorre el array
const imprimirPrimeroUltimo = (id, tipoCon) => {
    document.querySelector(id).innerHTML = `<p>Primera atención: ${tipoCon[0].paciente} - ${tipoCon[0].prevision} | Última atención: ${tipoCon[tipoCon.length - 1].paciente} - ${tipoCon[tipoCon.length - 1].prevision}</p>`;
};

// Creacion de funcion tabla

const imprimirTabla = (id, tipoCon) => {
    let tabla = document.querySelector(id); // Declaracion de la tabla
    // Comienzo de la creacion de la tabla
    let html = ''
    html = html + `
	<table class="mx-auto bg-primary">
  	<thead>
        <tr>
            <th>HORA</th>
            <th>ESPECIALISTA</th>
            <th>PACIENTE</th>
            <th>RUT</th>
            <th>PREVISION</th>
        </tr>
   </thead>
   <tbody>
`
    for (let i = 0; i < tipoCon.length; i++) { // Solo en este ciclo se corre el array para agregar elementos a la tabla segun el .length del array
        html = html + `
    <tr>
        <td>${tipoCon[i].hora}</td>
        <td>${tipoCon[i].especialista}</td>
        <td>${tipoCon[i].paciente}</td>
        <td>${tipoCon[i].rut}</td>
        <td>${tipoCon[i].prevision}</td>
     </tr>
  `
    }
    html = html + `
   </tbody>
  </table>
`
    // Fin de la creacion de la tabla
    tabla.innerHTML = html
    // Agregando la tabla
}


// Arrays utilizadas --------------------------------------------------------------------------
const radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA"
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE"
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE"
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA"
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA"
    },
];
const traumatologia = [
    {
        hora: "08:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA"
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE"
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE"
    }
];
const dental = [
    {
        hora: "08:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE"
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE"
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA"
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA"
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA"
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE"
    }
];

// Ejecucion de funciones utilizadas --------------------------------------------------------------------------
imprimirPrimeroUltimo("#texto1", radiologia);
imprimirPrimeroUltimo("#texto2", traumatologia);
imprimirPrimeroUltimo("#texto3", dental);

// TABLA NUMERO 1 --------------------------------------------------------------------------
imprimirTabla("#tabla", radiologia);
imprimirTabla("#tabla2", traumatologia);
imprimirTabla("#tabla3", dental);


// ------------------------------------- DESAFIO NUMERO 2 ----------------------------------------------------------------------

// NOTA IMPORTANTE: Algunas notas son contradictorias ya que dicen "agregue al array" en la parte de requerimientos, sin embargo en la descripcion dicen que no se deben modificar

// ------------------------------------- Agregar las siguientes horas al arreglo de Traumatología
const datosNuevosTraumatologia = [
    {
        hora: "09:00",
        especialista: "RENÉ POBLETE",
        paciente: "ANA GELLONA",
        rut: "13123329-7",
        prevision: "ISAPRE"
    },
    {
        hora: "09:30",
        especialista: "MARIA SOLAR",
        paciente: "RAMIRO ANDRADE",
        rut: "12221451-K",
        prevision: "FONASA"
    },
    {
        hora: "10:00",
        especialista: "RAUL LOYOLA",
        paciente: "CARMEN ISLA",
        rut: "10112348-3",
        prevision: "ISAPRE"
    },
    {
        hora: "10:30",
        especialista: "ANTONIO LARENAS",
        paciente: "PABLO LOAYZA",
        rut: "13453234-1",
        prevision: "ISAPRE"
    },
    {
        hora: "12:00",
        especialista: "MATIAS ARAVENA",
        paciente: "SUSANA POBLETE",
        rut: "14345656-6",
        prevision: "FONASA"
    },
];

let listaFinalTraumatologia = datosNuevosTraumatologia.concat(traumatologia); // Contact para unir
listaFinalTraumatologia = listaFinalTraumatologia.sort((a, b) => { // Funcion para ordenar segun la hora
    if (a.hora > b.hora) {
        return 1;
    }
    if (a.hora < b.hora) {
        return -1;
    }
    return 0;
});

console.log(listaFinalTraumatologia);

// ------------------------------------- Eliminar el primer y último elemento del arreglo de Radiología.

let datosModificadosRadiologia = radiologia;
datosModificadosRadiologia.pop(); // Eliminar el ultimo
datosModificadosRadiologia.shift(); // Eliminar el primero
console.log(datosModificadosRadiologia);

// ------------------------------------- Imprimir en la página HTML la lista de consultas médicas de Dental. Sin embargo, debe hacerlo
// ------------------------------------- separando por un guión cada dato desplegado y cada fila de información debe estar
// ------------------------------------- separada por un párrafo.

dental.forEach((datosDentales) => {
    const para = document.createElement("p");
    para.innerText = `${datosDentales.hora} - ${datosDentales.especialista} - ${datosDentales.paciente} - ${datosDentales.rut} - ${datosDentales.prevision}`;
    document.querySelector("#informacionDental").appendChild(para);
});

// ------------------------------------- Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
// ------------------------------------- Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo

const soloNombresRadiologia = radiologia.map((radiologia) => {
    return radiologia.paciente;
});
const soloNombresTraumatologia = traumatologia.map((traumatologia) => {
    return traumatologia.paciente;
});
const soloNombresDental = dental.map((dental) => {
    return dental.paciente;
});

let allPacientes = soloNombresDental.concat(soloNombresRadiologia);
allPacientes = allPacientes.concat(soloNombresTraumatologia);

const listadoTotal = document.querySelector("#listadoTotal");
allPacientes.forEach((nombresPacientes) => {
    const texto = `<p>${nombresPacientes}<p>`;
    listadoTotal.innerHTML += texto
})



// ------------------------------------- Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicasde Dental.

const informacionISAPREDental = document.querySelector("#informacionISAPREDental");

dental.forEach((datosDentales) => {
    if (datosDentales.prevision === "ISAPRE")
    {
        /*
        const para = document.createElement("p"); // Para crear un nuevo elemento en el documento
        para.innerText = `${datosDentales.paciente} - ${datosDentales.prevision}`; // Asignamos su valor interno
        document.querySelector("#informacionISAPREDental").appendChild(para); // Procedemos a adicionarlo en la seccion del documento que deseamos */

        const texto = `<p>${datosDentales.paciente} - ${datosDentales.prevision} </p>`; // Asignamos su valor interno
        informacionISAPREDental.innerHTML += texto
    }
});
// ------------------------------------- Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.

const informacionFONASATraumatologia = document.querySelector("#informacionFONASATraumatologia");
listaFinalTraumatologia.forEach((datosTraumatologia) => {
    if (datosTraumatologia.prevision === "FONASA")
    {
        const texto = `<p>${datosTraumatologia.paciente} - ${datosTraumatologia.prevision} </p>`; // Asignamos su valor interno
        informacionFONASATraumatologia.innerHTML += texto
    }
});