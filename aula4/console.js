

function changeConsoleLog(){
    const oldConsoleLog = console.log
    console.log = function(...params){
        oldConsoleLog.call(console,Date(),...params)
    }
    console.log.restore = function (){
        console.log = oldConsoleLog
    }
}

console.log("X", "Y")

//X

changeConsoleLog()

console.log("X", "Y")

//Mon Sep 15 2025 10:42:30 GMT+0000 (Coordinated Universal Time) - X

console.log.restore()

console.log("X", "Y")

//X