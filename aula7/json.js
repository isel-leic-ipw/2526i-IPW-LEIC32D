const json = ' {"name":"Filipe" , "text" : "txt" }'
const parsed = JSON.parse(json)
const inString = JSON.stringify(parsed)
console.log(parsed)
console.log(inString)