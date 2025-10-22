import services from "./tasks-data.mjs"

function getTasks(limit){
    //verificar se limite é valido (e.g. positivo) 
    return services.getTasks(limit)
}

function getTaskById(taskId){
    //Verificar se taskID é undefined
    //Verificar se existe a tasks
    return services.getTaskById(taskId)
}

function createTask(txt){
   //Verificar se txt é undefined
    return services.createTask(txt)
}

export const service = {
    getTasks,
    getTaskById,
    createTask
}

export default service