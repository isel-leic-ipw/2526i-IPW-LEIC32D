const data = {
    
    "http://api.football-data.org/v4/teams/1903" : 
        '{"coach" : { "name" : "José Mourinho"}}'
}

function printCoach(teamId){
    const options = {
            headers: {
              "X-Auth-Token" : "457753d1ab46482699de02adcbe0ec1f"
            }
        }

    return fetch(`http://api.football-data.org/v4/teams/${teamId}`,options)
                .then(resp=>resp.json())
                .then(body=>console.log(body.coach.name))
}

function changeFetch(){
    fetch = function(url){
        const resp = {}
        resp.json = function(){
            return Promise.resolve(JSON.parse(data[url]))
        }
        return Promise.resolve(resp)
    }
}

function main(){
   printCoach("1903")
}

//changeFetch()
main()