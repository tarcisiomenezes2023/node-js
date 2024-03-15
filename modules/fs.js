const fs = require('fs')
const path = require('path')

/* Create Folder */
fs.mkdir(path.join(__dirname, "test"), (error) => {
    if (error) {
        return console.log("Error ", error)
    }
    console.log("Success!")
})

/* Create File */
fs.writeFile(path.join(__dirname, "/test", "test.html"), "Hello node!", (error) => {
    if (error) {
        return console.log("Error ", error)
    }
    console.log("Success!")
})

/* Add File */
fs.appendFile(path.join(__dirname, "/test", "test.txt"), "Hello World!", (error) => {
    if (error) {
       return console.log("Error ", error)
    }
    console.log("Success!")
})

/* Read File */
fs.readFile(path.join(__dirname, "/test", "test.html", "test.txt"),
 "utf8", (error, data) => {
    if (error) {
        return console.log("Error ", error)
    }
    else { 
    console.log("data ", data)
    }
 })
