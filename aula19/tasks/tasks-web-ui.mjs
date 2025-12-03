import services from './tasks-services.mjs'

const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

function home(req, resp) {
    resp.send(
        `<html>
            <head>
                <title>Tasks Application</title>
            </head>
            <body>
                    <!-- Menu -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>

                    <h1>Tasks</h1>
                    <p>Application</p>
                    
                    <a href="https://www.isel.pt"> ISEL </a>
            </body>
        </html>`)

}

async function getTasks(req, resp) {
    const tasks = await services.getTasks(token)
    resp.send(`
            <html>
                <head>
                    <title>Tasks</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <!-- Header -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>
                    ${tasks.map(t => taskHtml(t)).join('')}
                    </body>
            </html>
        `)
}

function taskHtml(task){
        return `
            <p>
                Task Info : 
                    <a href="/tasks/${task.id}" >ID = ${task.id}</a> Text = ${task.text}
            </p>
        `
    }

async function getTaskById(req, resp) {
    const task = await services.getTaskById(req.params.taskId)
    resp.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Tasks</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <!-- Header -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>
            
                    <ul>
                        <li>Identifier : ${task.id}</li>
                        <li>Text : ${task.text}</li>
                    </ul>
            
                    <!-- Header -->
                    <p>Chelas 2021</p>
            
                </body>
            </html>
            
        `)
}

function createTask(req, resp) {
    resp.send(`<html>
                <head>
                    <title>Tasks Application</title>
                </head>
                <body>
                    <!-- Menu -->
                    <a href="/"> Home </a>
                    <a href="/tasks"> Tasks </a>

                    <h1>Create TASKS</h1>
                </body>
            </html>`)

}

export const webui = {
    getTasks,
    getTaskById,
    createTask,
    home
}

export default webui