const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        return res.end('Home page')
    }
    if (req.url === '/about') {
        for(i =0; i < 1000; i++){
            for(j =0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        return res.end('About page')
    }
    res.end('Error page')
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...')
});