const fs = require("fs");
fs.readFileSync(__dirname + "/pelis.json");
// Definimos la función parsearPelicula
function parsearPelicula (){
    // Lee el contenido del archivo "pelis.json" y lo parsea como un objeto JavaScript
    const peliculas = fs.readFileSync("pelis.json");
   // parseamos el objeto
    return JSON.parse(peliculas);
};
//creamos una funcion para utilizar el objeto en funciones
const misPeliculas = parsearPelicula();

// se crea una funcion para la consigna sin parametros, y se exporta
exports.sinParametro = function() {
    //se crea una variable para utilizar el parseo
    return misPeliculas;
   
}
//se crea una funcion para la consigna sort
exports.sortPeli = function(criterio){
    return misPeliculas.slice().sort((a, b) => {
        if (criterio === "title") return a.title.localeCompare(b.title);
        if (criterio === "rating") return a.rating - b.rating;
        if (criterio === "tags") return a.tags.join(', ').localeCompare(b.tags.join(', '));
        return 0;
    });
};
    /*const ordenarPeli = misPeliculas.sort(function (a,b){
        if(criterio === "title"){
        if(a.title > b.title){
            return 1;
        }
        if(a.title < b.title){
        
            return -1;
        }}
        else if (criterio === "rating"){
        if(a.rating > b.rating){
            return 1;
        }
        if(a.rating < b.rating){
        
            return -1;
        }}
        else if(criterio === "tags"){
        const tagsA = a.tags.join(', ');
        const tagsB = b.tags.join(', ');
        if(tagsA > tagsB){
            return 1;
        }
        if(tagsA < tagsB){
            return -1;
        }}
        return 0;
    });
    return ordenarPeli;
}*/
//se crea una funcion para buscar las peliculas
exports.buscarPeli = function (elemento){
    //creamos una constante para almacenar el numero del rating
    const ratingProporcionado = parseFloat(elemento);
    //creamos una funcion flecha para agregar el metodo filter y regresa
    const peliculaEncontrada = misPeliculas.filter(pelicula => {
    
        // Verifica si el elemento coincide con el título, la calificación o las etiquetas
        return (
            pelicula.title.toLowerCase().includes(elemento.toLowerCase()) ||
            pelicula.rating === ratingProporcionado
        );
    });

    return peliculaEncontrada;
}
//se crea una funcion para el tag
exports.tagPelicula = function (elemento){
    //creamos una constante  para peliculatag, y creamos una funcion flecha 
    const PeliculaTag = misPeliculas.filter(pelicula =>{
        return pelicula.tags.includes(elemento);
    })
    return PeliculaTag;

}