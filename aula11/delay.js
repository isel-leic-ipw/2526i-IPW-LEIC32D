function operation(){
    console.log("Operation Done")
}

//setTimeout(()=>operation(), 1000)

const p1 = new Promise((resolve, reject)=>resolve(84))
const p2 = new Promise((resolve, reject)=>reject("E 21"))

p1 
    .then(n=>console.log("Value - ", n))
    .catch(e => console.log("Error - ", e))

p2 
    .then(n=>console.log("Value - ", n))
    .catch(e => console.log("Error - ", e))


function delay(oper,t){
    return new Promise((resolve,reject)=>setTimeout(()=>resolve(oper()),t))
}

delay(operation, 1000)
    .then(()=>delay(operation, 1000))
    .then(()=>delay(operation, 1000))
    .then(()=>console.log("Done"))