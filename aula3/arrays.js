const array = [123,,"STR"]

console.log(array)
console.log(array.length)

console.log(array[1])
console.log(array[2])
console.log(array["2"])

array[100] = 100

console.log(array)
console.log(array.length)

array.push("last")
console.log(array)

array.email = "fil@cc.isel.pt"

console.log(array)

const array2 = [1,2,3]
//[2,4,6]

//const f = function(e){return e * 2}

//const array3 = array2.map(function(e){return e * 2})
//const array3 = array2.map(f)

const array3 = array2.map(e => e * 2)

console.log(array3)