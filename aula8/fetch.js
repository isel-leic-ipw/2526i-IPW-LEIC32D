
function getMoviesThen(){
    return fetch('https://api.sampleapis.com/movies/animation') 
        .then(resp => resp.json())
        .then(body => console.log(body))  
}

async function getMoviesAsyncAwait(){
    const resp = await fetch('https://api.sampleapis.com/movies/animation') 
    const body = await resp.json()
    console.log(body)
}

function printCoach(teamId){
    const options = {
            headers: {
              "X-Auth-Token" : "357753d1ab46482699de02adcbe0ec1f"
            }
        }

    return fetch(`http://api.football-data.org/v4/teams/${teamId}`,options)
                .then(resp=>resp.json())
                .then(body=>console.log(body.coach.name))
}

function main(){
   //printCoach("1903")
   getMoviesAsyncAwait()
        .then(()=>console.log("DONE"))
   
}

main()
