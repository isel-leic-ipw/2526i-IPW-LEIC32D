


function getTeam(id){

    return fetch......
}


function main(){

    getTeam(1903)
        .then(data => fs.writeFile("1903.json", JSON.stringify(data)))
}
