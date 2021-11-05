const Miscelanea = [];
class Cacharreria{
    constructor (imagen, nombre){
        this.nombre = nombre;
        this.imagen = imagen;
    }
}

// Miscelanea que vamos a vender
let producto1 = new Cacharreria (src='../Imagenes/miscelanea/tecnologia.jpg' , "  Tecnología ");
let producto2 = new Cacharreria (src='../Imagenes/miscelanea/camaras.jpg', " Camaras ");
let producto3 = new Cacharreria (src='../Imagenes/miscelanea/bisuteria.jpg', " Bisutería ");
let producto4 = new Cacharreria (src='../Imagenes/miscelanea/aretes.jpg', " Moñas y Aretes ");
let prodcuto5 = new Cacharreria (src='../Imagenes/miscelanea/cartucheras.jpg', " Cartucheras ");
let producto6 = new Cacharreria (src='../Imagenes/miscelanea/alcancias.jpg', " Alcancias ");
let producto7 = new Cacharreria (src='../Imagenes/miscelanea/cintas.jpg', " Cintas ");
let producto8 = new Cacharreria (src='../Imagenes/miscelanea/globos.jpg', " Piñatería ");
let producto9 = new Cacharreria (src='../Imagenes/miscelanea/icopor.jpg', " Icopors ");
let producto10 = new Cacharreria (src='../Imagenes/miscelanea/balso.jpg', " Palos de Balso ");
let producto11 = new Cacharreria (src='../Imagenes/miscelanea/metros.jpg', " Productos Modistería ");
let producto12 = new Cacharreria (src='../Imagenes/miscelanea/maqueta.jpg', " Productos para Maquetas ");

//Se agregan los productos a Miscelanea
Miscelanea.push (producto1);
Miscelanea.push (producto2);
Miscelanea.push (producto3);
Miscelanea.push (producto4);
Miscelanea.push (prodcuto5);
Miscelanea.push (producto6);
Miscelanea.push (producto7);
Miscelanea.push (producto8);
Miscelanea.push (producto9);
Miscelanea.push (producto10);
Miscelanea.push (producto11);
Miscelanea.push (producto12);

let cards = ``;

// Para generar cards de productos
for (let i=0; i<Miscelanea.length;i++){
   cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="Miscelanea.html">
                <img class="rounded-circle" src=${Miscelanea[i].imagen} alt="image1" width="350" height="266">
                
             </a>
            <div>
                <a class="" href="Miscelanea.html">
                    <h3 class="nombreProducto"> ${Miscelanea[i].nombre}</h3>
                </a>
                <br><br>
            </div>
         </div>
        </div>`
}

 document.getElementById("productosMiscelanea").innerHTML=cards;
				