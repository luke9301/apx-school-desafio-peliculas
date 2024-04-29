const peliculas = require("./pelis");
const informacion = process.argv.slice(2).join("");


//Importamos la funcion sin aprametro en la funcion peliculassin parametro
function peliculaSinparametro (){
    const resultado = peliculas.sinParametro();
    return resultado;
  }
//importamos la funcion con el metodo sort, pasando el parametro de criterio a validar
function sortearPelis(criterio){
  const resultadopeli = peliculas.sortPeli(criterio);
  return resultadopeli;
}
//importamos la funcion encontrar pelicula, con el parametro elemento
function encontrarPeli (elemento){
  const peliEncontrada = peliculas.buscarPeli(elemento);
  return peliEncontrada;
}
//importamos la funcion para utilizar el tag
function PeliculaConTag (elemento){
  const caracteristicaPeli = peliculas.tagPelicula(elemento);
  return caracteristicaPeli;
}
//creamos una funcion para obtener los resultados en donde se agregan decisiones 
function obtenerResultado (){
  //creamos una variable con el recultado, definiendolo como let
  let resultado = {};


  //creamos el primer if para la funcion sort
  if (informacion && informacion.startsWith("--sort")) {
    const criterio = informacion.slice(6);
    console.log(`Ordenando películas por ${criterio}`);
    resultado = sortearPelis(criterio);
  }  else if (informacion && informacion.startsWith("--search")) {
     const criterio = informacion.slice(8); // Obtiene el criterio después de "--search"
      console.log(`Buscando películas con ${criterio}`);//se imprime con el criterio esperado
      resultado = encontrarPeli(criterio); 
      //creamos la otra ruta con el tag
    }  else if (informacion && informacion.startsWith("--tag")) {
      const criterio = informacion.slice(5); // Obtiene el criterio después de "--tag"
      console.log(`Buscando películas con ${criterio}`);//se imprime el criterio esperado
      resultado = PeliculaConTag(criterio);
  } else {//creamos el ultimo camino si es que no se agrega nada en la terminal se imprime todas las peliculas
    console.log("Mostrando películas sin ordenar");
   // se imprime las peliculas sin ordenar 
    resultado = peliculaSinparametro();
  }
  //todo se imprime en forma de tabla
  console.table(resultado);
  return resultado;
}



//se crea la funcion main donde se llama a la funcion obtener resultado
function main(){

obtenerResultado();
  
}
main();