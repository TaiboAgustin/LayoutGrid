let inputProducto = prompt ("Ingresa por favor el producto que queres comprar: \n 1. Camiseta \n 2. Pantalon \n 3. Tapabocas \n 4. Gorra \n 5. Llavero");
let equipo = prompt ("Perfecto!! Ingrese el nombre del equipo del cual quiere adquirir su producto \n Recuerde que tenemos productos de: \n Astralis, 9Z Team, MIBR, Complexity, Fnatic, Furia, G2, Heroic, Isurus, NAVI, Vitality, VirtusPro.");
let talle = prompt ("Muy bien! Finalmente ingrese el talle del producto que quiere comprar. \n En caso de ser una gorra, un llavero o algun otro accesorio, no ingresar ningun valor y apretar Aceptar")
let precioProducto = 0;
let productoAComprar = inputProducto.toLowerCase();
var productoElegido;

const arrayDeProductos = [];

//objetos

function Prenda(tipo, precio, organizacion, tamano) {

	this.tipo = tipo
    this.precioProducto = precio;
    this.equipo = organizacion;
    this.talle = tamano;
}

function tapabocas(precio, organizacion){

    this.precioProducto = precio;
    this.equipo = organizacion;
}

function accesorio(tipoDeAccesorio, precio, organizacion) {

    this.productoAComprar = tipoDeAccesorio;
    this.precioProducto = precio;
    this.equipo = organizacion; 
}
//cierra objetos

function productoIngresado (){
    switch (productoAComprar){
        case "camiseta":
            precioProducto = 2500;
            productoElegido = new Prenda ('Camiseta', precioProducto, equipo, talle);
            arrayDeProductos.push(productoElegido);
            alert ("Usted ha elegido comprar una Camiseta de " +  productoElegido.equipo + " cuyo precio es de $" + productoElegido.precioProducto + ", de ser asi, presione Aceptar.");
        break;

        case "pantalon":
            precioProducto = 2000;
            productoElegido = new Prenda ('Pantalon', precioProducto, equipo, talle);
            arrayDeProductos.push(productoElegido);
            alert ("Usted ha elegido comprar un Pantalon de " +  productoElegido.equipo + " cuyo precio es de $" + productoElegido.precioProducto + ", de ser asi, presione Aceptar.");
        break;

        case "tapabocas":
            precioProducto = 500;
            productoElegido = new tapabocas (precioProducto, equipo);
            arrayDeProductos.push(productoElegido);
            alert ("Usted ha elegido comprar un Tapabocas de " + productoElegido.equipo + " cuyo precio es de $" + productoElegido.precioProducto + ", de ser asi, presione Aceptar.");
        break;
        
        case "gorra":
            precioProducto = 1500;
            productoElegido = new accesorio (productoAComprar, precioProducto, equipo);
            arrayDeProductos.push(productoElegido);
            alert ("Usted ha elegido comprar lo siguiente: " + productoElegido.productoAComprar + " de  " + productoElegido.equipo + " cuyo precio es de $" + productoElegido.precioProducto + ", de ser asi, presione Aceptar.");
        break;

        case "llavero":
            precioProducto = 600;
            productoElegido = new accesorio (productoAComprar, precioProducto, equipo);
            arrayDeProductos.push(productoElegido);
            alert ("Usted ha elegido comprar un: " + productoElegido.productoAComprar + "de: " + productoElegido.equipo + " cuyo precio es de $" + productoElegido.precioProducto + ", de ser asi, presione Aceptar.");
        break;

        default:
            alert("Usted no ha ingresado un producto valido. Por favor, intente nuevamente");
    }
}


productoIngresado();



let precioFinal = 0;
let cantidadDeCuotas = prompt ("Ahora, ingrese en cuantas cuotas va a querer pagar el producto seleccionado. \n Recuerde que tenemos opciones de pago en 3, 6 0 12 cuotas. \n En caso de querer un solo pago, ingrese el valor 1");

function tresCuotas (){
    precioFinal = precioProducto / 3;

    confirm("Muy bien! Usted ha elegido pagar el monto en 3 cuotas. \n Como el precio del producto es de $" + precioProducto + ", el monto a pagar por cuota es de: $" + Math.round(precioFinal) + ". En caso de estar de acuerdo, presione Aceptar.");
}

function seisCuotas (){
    precioFinal = precioProducto / 6;

    confirm("Muy bien! Usted ha elegido pagar el monto en 6 cuotas. \n Como el precio del producto es de $" + precioProducto + ", el monto a pagar por cuota es de: $" + Math.round(precioFinal) + ". En caso de estar de acuerdo, presione Aceptar.");
}

function doceCuotas (){
    precioFinal = precioProducto / 12;

    confirm("Muy bien! Usted ha elegido pagar el monto en 12 cuotas. \n Como el precio del producto es de $" + precioProducto + ", el monto a pagar por cuota es de: $" + Math.round(precioFinal) + ". En caso de estar de acuerdo, presione Aceptar.");
}


function cuotas(){

    switch (cantidadDeCuotas){
        case "1":
            alert ("Muy bien! El precio a pagar por tu " + productoAComprar + " es de $" + precioProducto + ". Presione el boton de continuar para proceder a las opciones de envio. \n Muchas gracias por confiar en Esports Store!");
        break;
    
        case "3":
            tresCuotas();
        break;
    
        case "6":
            seisCuotas();
        break;
    
        case "12":
            doceCuotas();
        break;
    }
}

cuotas();
console.log(arrayDeProductos);

