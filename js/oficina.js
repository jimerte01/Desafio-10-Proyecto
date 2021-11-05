const articulosOficina = [];
class Oficina{
    constructor (imagen, nombre){
        this.nombre = nombre;
        this.imagen = imagen;
    }

}
// articulos de oficina que vamos a vender
let Utiles1 = new Oficina (src='../Imagenes/oficina/carpetas.jpg' , " Carpetas ");
let Utiles2 = new Oficina (src='../Imagenes/oficina/az.jpg', "  Archivo ");
let Utiles3 = new Oficina (src='../Imagenes/oficina/resmas.jpg', " Resmas ");
let Utiles4 = new Oficina (src='../Imagenes/oficina/formatos.jpg', " Formatos ");
let Utiles5 = new Oficina (src='../Imagenes/oficina/libros.jpg', " Libros Contables");
let Utiles6 = new Oficina (src='../Imagenes/oficina/sobres.jpg', " Sobres ");
let Utiles7 = new Oficina (src='../Imagenes/oficina/cosedoras.jpg', " Cosedoras");
let Utiles8 = new Oficina (src='../Imagenes/oficina/perforadoras.jpg', " Perforadoras ");
let Utiles9 = new Oficina (src='../Imagenes/oficina/sellos.jpg', " Sellos ");

//Se agregan los productos a articulosOficina
articulosOficina.push (Utiles1);
articulosOficina.push (Utiles2);
articulosOficina.push (Utiles3);
articulosOficina.push (Utiles4);
articulosOficina.push (Utiles5);
articulosOficina.push (Utiles6);
articulosOficina.push (Utiles7);
articulosOficina.push (Utiles8);
articulosOficina.push (Utiles9);

let cards = ``;

// Para generar cards de productos
for (let i=0; i<articulosOficina.length;i++){
   cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="oficina.html">
                <img class="fotos" src=${articulosOficina[i].imagen} alt="image1">
                
             </a>
            <div>
                <a class="" href="oficina.html">
                    <h3 class="nombreProducto"> ${articulosOficina[i].nombre}</h3>
                </a>
                <br><br>
            </div>
         </div>
        </div>`

}

 document.getElementById("deOficina").innerHTML=cards;

