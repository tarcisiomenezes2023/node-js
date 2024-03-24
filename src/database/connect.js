const mongoose = require('mongoose')

const MyDataBase = async () => {
    try {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.4yup3ke.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJS`)
    
        console.log('SUCCESS! Connected to MongoDB')
    } catch (error) {
        console.error('ERROR! Failed to connected to MongoDB: ', error)  
      } 
}

module.exports = MyDataBase
