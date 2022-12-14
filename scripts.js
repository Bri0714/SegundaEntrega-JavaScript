// EMPRESA

const Empresa = "TransportesGrancolombiana"
const Bienvenido = ("Bienvenido a la " + Empresa + " en que le podemos colaborar:");

alert(Empresa)
alert(Bienvenido)

//VARIABLES

let start = 0

let flecha = "--> ";
let espacio = ", ";

let fecha = new Date();


// CLASE CONSTRUCTOR PARA HACER EL REGISTRO DEL ESTUDIANTE

class  Estudiante{
    constructor(nombre, apellido, correo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
    toString() {
        return this.nombre + " " + this.apellido;
    }
}

// REGISTRO DEL ESTUDIANTE 

let estudiantes = new Estudiante(prompt("Ingrese el nombre del estudiante").toLocaleUpperCase(), prompt("Ingrese el apellido del estudiante").toLocaleUpperCase(), prompt("Ingrese el correo electronico del estudiante").toLocaleUpperCase());

    while ((estudiantes.nombre == "") || (estudiantes.apellido == "") || (estudiantes.correo == "") || ((estudiantes.correo).search("@") == -1)) {

        alert("Debes ingresar todos los campos para  que el registro sea exitoso.");

        estudiantes = new Estudiante(prompt("Ingrese el nombre del estudiante").toLocaleUpperCase(), prompt("Ingrese el apellido del estudiante").toLocaleUpperCase(), prompt("Ingrese el correo electronico del estudiante").toLocaleUpperCase());
    }

// BIENVENIDA PARA EL ESTUDIANTE REGISTRADO

alert(Bienvenido + " " + estudiantes.toString());

// ARRAY (lista de las opciones para el estudiante)
let OpcionEstudiante = ["1.- Consultar Precios", "2.- Pagar Ruta ", "3.- Salir"];

// OPERACION A REALIZAR

alert("En  " + Empresa + ", " + " el estudiante tendra difernetes opciones: " + "\n" + OpcionEstudiante[0] + "\n" + OpcionEstudiante[1] + "\n" + OpcionEstudiante[2]);

//  ARRAY(BARRIOS)

class Ubicacion {
    constructor(localidad, barrio, precio) {
        this.localidad = localidad;
        this.barrio = barrio;
        this.precio = precio;
    }
    toString() {
        return this.localidad + "" + this.precio
    }
}

let listaUbicacion = [];

listaUbicacion.push(new Ubicacion("FONTIBON", 100000));
listaUbicacion.push(new Ubicacion("USAQUEN", 180000));
listaUbicacion.push(new Ubicacion("KENNEDY", 1750000));
listaUbicacion.push(new Ubicacion("CHAPINERO",185000));
listaUbicacion.push(new Ubicacion("SANTAFE", 165000));
listaUbicacion.push(new Ubicacion("SAN CRISTOBAL", 200000));
listaUbicacion.push(new Ubicacion("USME",200000 ));

//FUNCION SIN PARAMETROS PARA ESCOJER OPCION

function Operacion() {

    let operacion = parseInt(prompt("¿Qué deseas hacer? , Ingresa el número de la opción que deseas realizar: " + "\n" + ( OpcionEstudiante[0]) + "\n" + ( OpcionEstudiante[1]) + "\n" + ( OpcionEstudiante[2])));

    switch (operacion) {
        case 1:

            alert(" Escoje una opcion: ");
            consultaGeneral();
            volver();

            break;
        case 2:

            consulta("Consultar Precios");
            precios();
            volver();

            break;
        case 3:

            consulta(" pagar ruta ");
            pagar();
            volver();

            break;

        default:
            alert("Solo puedes elegir un número entre 1 y 4");
            Operacion();
            break;
    }
}

// CONSULTA GENERAL

function consultaGeneral() {

    alert("El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[0].localidad + " Precio para  pagar la ruta : " + listaDivisas[0].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[1].localidad + " Precio para  pagar la ruta : " + listaDivisas[1].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[2].localidad + " Precio para  pagar la ruta : " + listaDivisas[2].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[3].localidad + " Precio para  pagar la ruta : " + listaDivisas[3].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[4].localidad + " Precio para  pagar la ruta : " + listaDivisas[4].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[5].localidad + " Precio para  pagar la ruta : " + listaDivisas[5].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[6].localidad + " Precio para  pagar la ruta : " + listaDivisas[6].precio)

// FUNCION PAGAR SIN PARAMETROS 

function pagar() {

    let Pagar_ruta = parseInt(prompt("¿PARA DONDE DESEAS TU RUTA MIRA EL PRECIO ? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- " + (listaUbicacion[0].nombre) + "\n" + "2.- " + (listaUbicacion[1].nombre) + "\n" + "3.- " + (llistaUbicacion[2].nombre) + "\n" + "4.- " + (listaUbicacion[3].nombre) + "\n" + "5.- " + (listaUbicacion[4].nombre) + "\n" + "6.- " + (listaUbicacion[5].nombre) + "\n" + "7.- " + (listaUbicacion[6].nombre) + "\n" + "8.- " + (listaUbicacion[7].nombre) + "\n" + "9.- Volver al Inicio"));

    switch (Pagar_ruta) {
        case 1:

            calcularPago("FONTIBON",listaUbicacion[0].precio);
            break;

        case 2:
            calcularPago("USAQUEN", listaUbicacion[1].precio);
            break;

        case 3:
            calcularPago("KENNEDY", listaUbicacion[2].precio);
            break;

        case 4:
            calcularPago("CHAPINERO", listaUbicacion[3].precio);
            break;

        case 5:
            calcularPago("SANTAFE", listaUbicacion[4].precio);
            break;

        case 6:
            calcularPago("SAN CRISTOBAL", listaUbicacion[5].precio);
            break;

        case 7:
            calcularPago("USME",listaUbicacion[6].precio);
            break;

        case 8:
            break;

        default:
            alert("Solo puedes elegir un número entre 1 y 9");
            pagar();
            break;
    }
}

// VOLVER 

function volver() {

    start = parseInt(prompt("(Ingresa la opción correspondiente): " + "\n" + (("1. Volver").toString()) + "\n" + (("2. Salir\n".toString()))));

    switch (start) {
        case 1:
            break;

        case 2:
            break;

        default:
            alert("Solo puedes elegir entre 1 y 2");
            volver();
            break;
    }

}

//FUNCTION CONSULTA

function consulta(nombreConsulta){

    let FontibonTasa= "";
    let UsaquenTasa = "";
    let KennedyTasa = "";
    let ChapineroTasa = "";
    let SantafeTasa = "";
    let San_CristobalTasa = "";
    let UsmeTasa = "";


    let fecha = new Date();
    let flecha = "--> ";
    

    if (nombreConsulta === "pagar") {

    FontibonTasa = listaUbicacion[0].precio;
    UsaquenTasa = listaUbicacion[1].precio;
    KennedyTasa = listaUbicacion[2].precio;
    ChapineroTasa = listaUbicacion[3].precio;
    SantafeTasa = listaUbicacion[4].precio;
    San_CristobalTasa = listaUbicacion[5].precio;
    UsmeTasa = listaUbicacion[6].precio;

    } else {

        alert("puedes consultar bien los precios y despues pagar. gracias")

    }
}

alert("El precio de  las rutas para el 2023 " + nombreConsulta + " es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + ("fONTIBON = " + FontibonTasa.toString()) + "\n" + flecha + ("USAQUEN = " + UsaquenTasa.toString()) + "\n" + flecha + ("KENNEDY= " + KennedyTasa.toString()) + "\n" + flecha + ("CHAPINERO = " + ChapineroTasa.toString()) + "\n" + flecha + ("SANTAFE = " + SantafeTasa.toString()) + "\n" + flecha + ("SAN CRISTOBAL = " + San_CristobalTasa.toString()) + "\n" + flecha + ("USME = " + UsmeTasa.toString()));



// FUNCION SALIDA
function salida() {
    alert("GRACIAS POR PREFERIRNOS " + Empresa + ". HASTA PRONTO!");
}

// OPCIONESTUDIANTE

Operacion();

while (start !== 2) {

    Operacion();

}

//  (SALIDA)

salida();

}