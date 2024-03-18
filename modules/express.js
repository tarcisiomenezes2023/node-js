const express = require('express')

const app = express()
const port = 8080

app.get('/home', (req, res) => {
    res.contentType('text/html')
    res.status(200).send('<h1>Home Page</h1>')
})

app.get('/users', (req, res) => {
    const user = [
        {
            name: "Jazmin",
            email: "Jazmin2024@Outlook.com",
        },
        {
            name: "Tarcísio",
            email: "tarcisio2024@Outlook.com"
        },
    ]
    res.json(user).status(200)
})

app.get('/categories', (req, res) => {
const category = [
    {
        id: 1,
        category: "Development"
    },
    {
        id: 2,
        category: "Design"
    },
    {
        id: 1,
        category: "Engineering"
    },
    {
        id: 2,
        category: "Financial"
    },
]
res.json(category).status(200)
})

app.listen(port, () => console.log(`Application working on port ${port}`))