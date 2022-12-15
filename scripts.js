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

class Estudiante{
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

let estudiante = new Estudiante(prompt("Ingrese el nombre del estudiante").toLocaleUpperCase(), prompt("Ingrese el apellido del estudiante").toLocaleUpperCase(), prompt("Ingrese el correo electronico del estudiante").toLocaleUpperCase());

    while ((estudiante.nombre == "") || (estudiante.apellido == "") || (estudiante.correo == "") || ((estudiante.correo).search("@") == -1)) {

        alert("Debes ingresar todos los campos para  que el registro sea exitoso.");

        estudiante = new Estudiante(prompt("Ingrese el nombre del estudiante").toLocaleUpperCase(), prompt("Ingrese el apellido del estudiante").toLocaleUpperCase(), prompt("Ingrese el correo electronico del estudiante").toLocaleUpperCase());
    }

// BIENVENIDA PARA EL ESTUDIANTE REGISTRADO

alert( Bienvenido + " " + estudiante.toString());

// ARRAY (lista de las opciones para el estudiante)
let OpcionEstudiante = ["1.- Consultar Precios", "2.- Pagar Ruta ", "3.- Salir"];

// OPERACION A REALIZAR

alert("En  " + Empresa + ", " + " el estudiante tendra diferentes opciones: " + "\n" + OpcionEstudiante[0] + "\n" + OpcionEstudiante[1] + "\n" + OpcionEstudiante[2]);

//  ARRAY(UBICACION)

class Ubicacion {
    constructor(localidad, precio) {
        this.localidad = localidad;
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

            alert(" CONSULTA TODOS LOS PRECIODS LAS RUTAS : ");
            consultaGeneral();
            volver();

            break;
        case 2:

            consulta(" precios ");
            consulta();
            volver();

            break;
        case 3:

            consulta(" pagar ");
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

    alert("El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[0].localidad + " Precio para  pagar la ruta : " + listaUbicacion[0].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[1].localidad + " Precio para  pagar la ruta : " +  listaUbicacion[1].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[2].localidad + " Precio para  pagar la ruta : " +  listaUbicacion[2].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[3].localidad + " Precio para  pagar la ruta : " +  listaUbicacion[3].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" +  listaUbicacion[4].localidad + " Precio para  pagar la ruta : " +  listaUbicacion[4].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[5].localidad + " Precio para  pagar la ruta : " +  listaUbicacion[5].precio + "El precio de las rutas son para la localidad de : " + "\n\n" + fecha.toUTCString() + "\n\n" + listaUbicacion[6].localidad + " Precio para  pagar la ruta : " +  listaUbicacion[6].precio)
}

// FUNCION PAGAR SIN PARAMETROS 


function pagar() {

    let Pagar_ruta = parseInt(prompt("¿PARA DONDE DESEAS TU RUTA? MIRA EL PRECIO : (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- " + (listaUbicacion[0].nombre) + "\n" + "2.- " + (listaUbicacion[1].nombre) + "\n" + "3.- " + (llistaUbicacion[2].nombre) + "\n" + "4.- " + (listaUbicacion[3].nombre) + "\n" + "5.- " + (listaUbicacion[4].nombre) + "\n" + "6.- " + (listaUbicacion[5].nombre) + "\n" + "7.- " + (listaUbicacion[6].nombre) + "\n" + "8.- " + (listaUbicacion[7].nombre) + "\n" + "9.- Volver al Inicio"));

    switch (Pagar_ruta) {
        case 1:

            alert("Pagar:" + listaUbicacion[0].precio);
            break;

        case 2:
            alert("Pagar:" +  listaUbicacion[1].precio);
            break;

        case 3:
            alert("Pagar:" + listaUbicacion[2].precio);
            break;

        case 4:
            alert("Pagar:" + listaUbicacion[3].precio);
            break;

        case 5:
            alert("Pagar:" + listaUbicacion[4].precio);
            break;

        case 6:
            alert("Pagar:" + listaUbicacion[5].precio);
            break;

        case 7:
            alert("Pagar:" + listaUbicacion[6].precio);
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
            alert(" Elegir un numero entre 1 y 2");
            volver();
            break;
    }

}



// FUNCION SALIDA
function salida() {
    alert("GRACIAS POR PREFERIRNOS " + Empresa + ". HASTA PRONTO!");
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

        alert("consulte los precios de la ruta segun la localidad que necesite ")

        consultaGeneral()

    }

    alert("El precio de  las rutas para el 2023 " + nombreConsulta + " es: " + "\n\n" + fecha.toUTCString() + "\n\n" + flecha + ("fONTIBON = " + FontibonTasa.toString()) + "\n" + flecha + ("USAQUEN = " + UsaquenTasa.toString()) + "\n" + flecha + ("KENNEDY= " + KennedyTasa.toString()) + "\n" + flecha + ("CHAPINERO = " + ChapineroTasa.toString()) + "\n" + flecha + ("SANTAFE = " + SantafeTasa.toString()) + "\n" + flecha + ("SAN CRISTOBAL = " + San_CristobalTasa.toString()) + "\n" + flecha + ("USME = " + UsmeTasa.toString()));
}


// OPCIONESTUDIANTE

Operacion();

while (start !== 2) {

    Operacion();

}

//  (SALIDA)

salida();