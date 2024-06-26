const express = require('express')
const UserModel = require('../src/database/models/user.model')


const app = express()
const port = 8080

app.use(express.json());

/* Setting up Ejs */
app.set('view engine', 'ejs')
app.set('views', 'src/views')

/* --------------------------------------------  */

/* Middleware */

app.use((req, res, next) => {
    console.log(`Request Type: ${req.method}`)
    console.log(`Content Type: ${req.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)
    next()
})

/* --------------------------------------------------- */

/* Defining route for Ejs */

app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({})
    res.render("index", {users: users})
})

/* -------------------------------------------- */

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

/* catching users by ID */

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id)
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).send(error.message)
    }
})

/* --------------------------------------------- */

/* Editing users by ID */

app.patch('/users/:id', async (req, res) => {
    try {

        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true})

        return res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
 })


/* ------------------------------------------------ */

/* Deleting users by ID */

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id, req.body)

        return res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

/* --------------------------------------------------- */
app.post('/users', async (req, res) => {
    try {
    const user = await UserModel.create(req.body)

    res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(port, () => console.log(`Application working on port ${port}`))