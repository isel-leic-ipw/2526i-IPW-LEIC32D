function getMovies(){
    return fetch('https://api.sampleapis.com/movies/animation') 
        .then(resp => resp.json())
        .then(body => console.log(body))  
}

function getGames(){
    return fetch('https://api.sampleapis.com/xbox/games') 
        .then(resp => resp.json())
        .then(body => console.log(body))  
}

const pMovies = getMovies()
const pGames = getGames()

const promiseAll = Promise.all([pMovies, pGames])

promiseAll 
    .then(()=>console.log("Done"))


/*getMovies()
    .then(()=>getGames())
    .then(()=>console.log("Done"))
*/

