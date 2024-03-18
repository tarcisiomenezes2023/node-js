/* TEST */

const http = require('http')
const port = 8080

const server = http.createServer((req, resp) => {
    if (req.url === '/home') {
        resp.writeHead(200, { 'Content-Type': 'text/html' })
        resp.end('<h1>Hello World!</h1>')
    }
    else if (req.url === '/categories') {
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
        resp.writeHead(200, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify(category))
    }

    else if (req.url === '/users') {
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
        resp.writeHead(200, { 'Content-Type': 'application/json' })
        resp.end(JSON.stringify(user))
    }
})

server.listen(port, () => console.log(`The server is working on the port: ${port}`))