import expressFunction from 'express'

const app = expressFunction()

app.get("/", rootHandler)
app.get("/students", getStudents)

function getStudents(req, resp){
    console.log(req.method)
    resp.json("getStudents")
}

function rootHandler(req, resp){
    console.log(req.method)
    resp.json("RootHandler")
}

app.listen("8080",(error)=>{
                    if(error) return console.log(error)
                        console.log("LISTENING")
                    })