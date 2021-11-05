const listaUtiles = [];
class Utiles{
    constructor (imagen, nombre){
        this.nombre = nombre;
        this.imagen = imagen;
    }

}
// utiles que vamos a vender
let Utiles1 = new Utiles (src='../Imagenes/utiles/colores.jpg' , " Colores ");
let Utiles2 = new Utiles (src='../Imagenes/utiles/esferos.jpg', " Esferos ");
let Utiles3 = new Utiles (src='../Imagenes/utiles/reglas.jpg', " Reglas ");
let Utiles4 = new Utiles (src='../Imagenes/utiles/colbones.jpg', " Colbones ");
let Utiles5 = new Utiles (src='../Imagenes/utiles/cintas.jpg', " Cintas");
let Utiles6 = new Utiles (src='../Imagenes/utiles/pegantes.jpg', " Pegante Barra");
let Utiles7 = new Utiles (src='../Imagenes/utiles/resaltadores.jpg', " Resaltadores");
let Utiles8 = new Utiles (src='../Imagenes/utiles/borradores.jpg', " Borradores ");
let Utiles9 = new Utiles (src='../Imagenes/utiles/tajalapiz.jpg', " Sacapuntas");
let Utiles10 = new Utiles (src='../Imagenes/utiles/tijeras.jpg', " Tijeras");
let Utiles11 = new Utiles (src='../Imagenes/utiles/papeles.jpg', " Papeles");
let Utiles12 = new Utiles (src='../Imagenes/utiles/libros.jpg', " Libros didácticos");

//Se agregan los utiles a listaUtiles
listaUtiles.push (Utiles1);
listaUtiles.push (Utiles2);
listaUtiles.push (Utiles3);
listaUtiles.push (Utiles4);
listaUtiles.push (Utiles5);
listaUtiles.push (Utiles6);
listaUtiles.push (Utiles7);
listaUtiles.push (Utiles8);
listaUtiles.push (Utiles9);
listaUtiles.push (Utiles10);
listaUtiles.push (Utiles11);
listaUtiles.push (Utiles12);

let cards = ``;

// Para generar cards de productos
for (let i=0; i<listaUtiles.length;i++){
   cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="utiles.html">
                <img class="fotos" src=${listaUtiles[i].imagen} alt="image1">
                
             </a>
            <div>
                <a class="" href="utiles.html">
                    <h3 class="nombreProducto"> ${listaUtiles[i].nombre}</h3>
                </a>
                <br><br>
            </div>
         </div>
        </div>`

}

 document.getElementById("utiless").innerHTML=cards;

