/* const { Person } = require("./person") */
const dotenv = require('dotenv')
const MyDataBase = require('./src/database/connect')

dotenv.config()

MyDataBase();
/* require("./modules/path") */
/* require("./modules/fs") */
/* require("./modules/http") */
 require("./modules/express")

/* const person = new Person("Tarcísio") */ 

/* console.log(person.sayMyName()) */

