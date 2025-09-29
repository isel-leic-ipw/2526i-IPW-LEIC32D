const p1 = Promise.resolve(53)
const p2 = Promise.reject("ERROR")

console.log(p1)

p1
    .then(n => console.log(n+1))

p2  
    .catch(e=> console.log(e))

console.log("DONE")