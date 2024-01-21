//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, igual o mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    {name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225},
    {name: "Origen", durationInMinutes: 165},
    {name: "El señor de los anillos", durationInMinutes: 967},
    {name: "Solo en casa", durationInMinutes: 214},
    {name: "El jardin de las palabras", durationInMinutes: 40}];

let shortMovies = new Array();
let mediumMovies = new Array();
let longMovies = new Array();

movies.forEach(movie=>{
    if(movie['durationInMinutes'] < 100){
        shortMovies.push(movie['name']);
        return
    }else if(100 <= movie['durationInMinutes'] && movie['durationInMinutes'] < 200){
        mediumMovies.push(movie['name']);
        return
    }else if(200 < movie['durationInMinutes']){
        longMovies.push(movie['name'])
        return
        }
})
console.log(`
Películas pequeñas (menos 100min): ${shortMovies}
Películas medianas(entre 100-200min): ${mediumMovies}
Películas largas (más de 200min): ${longMovies}`)