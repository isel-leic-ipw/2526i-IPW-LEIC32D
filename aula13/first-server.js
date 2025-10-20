import express from 'express'

const app = express()

app.use(express.json())

app.get("/", rootHandler)
app.get("/students", getStudents)
app.get("/students/:id", getStudentsById)
app.post("/students", createStudent)

app.listen("8080",(error)=>{
                    if(error) return console.log(error)
                        console.log("LISTENING")
                    })

const students = [
    {id : 1, name : "Filipe" , number : 123},
    {id : 2, name : "Joao" , number : 234}
]

const nextId = 3 

function createStudent(req, resp){
    console.log(req.body)
    resp.json(req.body)
}

function getStudentsById(req, resp){
    console.log(req.params.id)
    resp.json("getStudentsById")
}

function getStudents(req, resp){
    console.log(req.query.limit)
    resp.json("getStudents")
}

function rootHandler(req, resp){
    console.log(req.method)
    resp.json("RootHandler")
}
