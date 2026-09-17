const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        return res.end('Welcome to our home page')
    }
    if(req.url === '/about') {
        return res.end('Welcome to our about page')
    }
    res.end(`
    <h1>OOOPS!</h1>
    <p>We Cant seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `
    )
})


server.listen(5000)

