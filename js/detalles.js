const detalles = [];
class regalo{
    constructor (imagen, nombre){
        this.nombre = nombre;
        this.imagen = imagen;
    }
}

// detalles que vamos a vender
let regalo1 = new regalo (src='../Imagenes/detalles/tarjetas3.jpg' , "  Tarjetas ");
let regalo2 = new regalo (src='../Imagenes/detalles/chocolates.jpg', " Chocolates ");
let regalo3 = new regalo (src='../Imagenes/detalles/cajas.jpg', " Cajas Decoradas ");
let regalo4 = new regalo (src='../Imagenes/detalles/detalles.jpg', " Regalos ");
let regalo5 = new regalo (src='../Imagenes/detalles/obsequios.jpg', " Juegos ");
let regalo6 = new regalo (src='../Imagenes/detalles/letreros.jpg', " Mensajes ");
let regalo7 = new regalo (src='../Imagenes/detalles/globos.jpg', " Globos ");
let regalo8 = new regalo (src='../Imagenes/detalles/papelregalo.jpg', " Papel Regalo ");
let regalo9 = new regalo (src='../Imagenes/detalles/peluches.jpg', " Peluches ");

//Se agregan los productos a detalles
detalles.push (regalo1);
detalles.push (regalo2);
detalles.push (regalo3);
detalles.push (regalo4);
detalles.push (regalo5);
detalles.push (regalo6);
detalles.push (regalo7);
detalles.push (regalo8);
detalles.push (regalo9);

let cards = ``;

// Para generar cards de productos
for (let i=0; i<detalles.length;i++){
   cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="detalles.html">
                <img class="rounded-circle" src=${detalles[i].imagen} alt="image1" width="350" height="266">
                
             </a>
            <div>
                <a class="" href="detalles.html">
                    <h3 class="nombreProducto"> ${detalles[i].nombre}</h3>
                </a>
                <br><br>
            </div>
         </div>
        </div>`
}

 document.getElementById("detallitos").innerHTML=cards;
				