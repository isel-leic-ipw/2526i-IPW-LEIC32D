const std = {name : "FILIPE" , number : 123}

console.log(std)

std.email = "ff@mail.com"

console.log(std)

delete std.email

console.log(std)

console.log(std.name)
console.log(std["name"])

function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + " : " + obj[p])
    }
}

showProps(std)

function createStudent(name, number){
    const s = {}
    s.name=name
    s.number=number
    return s
}

const std2 = createStudent("Joao",123)


