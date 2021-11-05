const jugueteria = [];
class juguete{
    constructor (imagen, nombre){
        this.nombre = nombre;
        this.imagen = imagen;
    }
}

// juguetes que vamos a vender
let juguete1 = new juguete (src='../Imagenes/jugueteria/munecos.jpg' , "  Muñecos ");
let juguete2 = new juguete (src='../Imagenes/jugueteria/varios.jpg', " Didácticos ");
let juguete3 = new juguete (src='../Imagenes/jugueteria/legos.jpg', " Legos ");
let juguete4 = new juguete (src='../Imagenes/jugueteria/yoyos.jpg', " Yoyos ");
let juguete5 = new juguete (src='../Imagenes/jugueteria/pelotas.jpg', " Pelotas ");
let juguete6 = new juguete (src='../Imagenes/jugueteria/trompos.jpg', " Trompos ");
let juguete7 = new juguete (src='../Imagenes/jugueteria/llaveros.jpg', " Llaveros ");
let juguete8 = new juguete (src='../Imagenes/jugueteria/balones.jpg', " Balones ");
let juguete9 = new juguete (src='../Imagenes/jugueteria/peluches.jpg', " Peluches ");

//Se agregan los productos a jugueteria
jugueteria.push (juguete1);
jugueteria.push (juguete2);
jugueteria.push (juguete3);
jugueteria.push (juguete4);
jugueteria.push (juguete5);
jugueteria.push (juguete6);
jugueteria.push (juguete7);
jugueteria.push (juguete8);
jugueteria.push (juguete9);

let cards = ``;

// Para generar cards de productos
for (let i=0; i<jugueteria.length;i++){
   cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="jugueteria.html">
                <img class="rounded-circle" src=${jugueteria[i].imagen} alt="image1" width="350" height="266">
                
             </a>
            <div>
                <a class="" href="jugueteria.html">
                    <h3 class="nombreProducto"> ${jugueteria[i].nombre}</h3>
                </a>
                <br><br>
            </div>
         </div>
        </div>`
}

 document.getElementById("juguetes").innerHTML=cards;
				