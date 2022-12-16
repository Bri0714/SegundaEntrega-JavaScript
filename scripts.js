//ARRAY DE OBJETOS.
let Ubicacion = [
    {   
        id: 1,
        localidad:"FONTIBON", 
        precio: 100000,
        colegio: "Instituto Infantil y Juvenil",
        ruta: "USE 028",
        conductor: "Brian Alexander Amezquita Parada",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    },

    {   
        id: 2,
        localidad:"USAQUEN", 
        precio: 130000,
        colegio: " Colegio Andes ",
        ruta: "THR 183",
        conductor: " Sebastian Amezquita Parada ",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    },
    {   
        id: 3,
        localidad:"KENNEDY", 
        precio: 140000,
        colegio: "Colegio mayor de kennedy ",
        ruta: "WLU 706",
        conductor: "Alexander Amezquita Parada ",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    },
    {   
        id: 4,
        localidad:" CIUDAD BOLIVAR", 
        precio: 200000,
        colegio: " Colegio Villermar el carmen ",
        ruta: "THX 766 ",
        conductor: "Brian Alexander Amezquita Parada",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    },
    {   
        id: 5,
        localidad:"PUENTE ARANDA", 
        precio: 230000,
        colegio: " Colegio Agustiniano Tagaste",
        ruta: "SMO 469",
        conductor: "Luz Andrea Amezquita ",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    },
    {   
        id: 6,
        localidad:" CHAPINERO", 
        precio: 250000,
        colegio: " Colegio Chapinero Central ",
        ruta: "SYS 302",
        conductor: "Luis Alfredo Parada ",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    },
    {   
        id: 7,
        localidad:"SANTAFE", 
        precio: 240000,
        colegio: " Colegio santafe distrital ",
        ruta: "HKP 702",
        conductor: "Ricardo Fernandez ",

        toString() {
            return  " - Para la ruta de la localidad de  " + this.localidad + " el conductor con nombre y apellido " + this.conductor + " conducira la ruta escolar identificada con placa : " + this.ruta + " y trabajara en el colegio  " + this.colegio + " \n\n "
        } 
    }
]

/*let BuscarUbicacion = Ubicacion.find(ubicacion => ubicacion.id === 2)
console.log(BuscarUbicacion)
alert(BuscarUbicacion)*/

function Menu(){

    let operacion = parseInt(prompt("¿Qué deseas hacer? , Ingresa el número de la opción que deseas realizar: " + "\n" + "1- Mostrar Informacion" + "\n" + "2- Pagar" + "\n" +  "3-Colegios Asociados"))

    switch (operacion) {
        case 1:

            alert(" CONSULTA TODOS LOS DATOS PARA ESCOJER LA RUTA INDICADA : " + " \n\n " + Ubicacion);
            console.log(Ubicacion)
                
            break;

        case 2:

            Pagar()
            
            break;

        case 3:

            alert(" LOS COLEGIOS ASOCIADOS A NUESTRA EMPRESA SON : ")
            ListarColegio()
            
            break;
        default:
            alert("Solo puedes elegir un numero entre 1 y 2 ");
            Menu();
            break;
    }
}


function Pagar(){

    let nombrelocalidad = prompt("Ingrese porfavor el nombre de la localidad donde vive el estudiante").toLowerCase()
    let UbicacionBuscada = Ubicacion.find(ubicacion => ubicacion.localidad.toLowerCase() === nombrelocalidad)
    alert( nombrelocalidad + " El precio de la ruta para esta localidad esta en :" + UbicacionBuscada.precio + " pesos." )

}

function ListarColegio(){

    let salida = ""
    Ubicacion.forEach(ubicacion =>  {
        salida = salida + ubicacion.colegio + "-" + ubicacion.localidad + "\n"
    })

    alert(salida)
}
Menu()