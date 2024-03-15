const path = require('path')

/* Only the current directory */
console.log(path.basename(__filename))

/* Name of the current directory */
console.log(path.dirname(__filename))

/* Extension of the file */
console.log(path.extname(__filename))

/* Create an object path */
console.log(path.parse(__filename))

/* Join file paths */
console.log(path.join(__dirname, "test", "test.html"))