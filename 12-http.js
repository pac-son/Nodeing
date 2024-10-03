const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Here is oour short history')
    }
    if(req.url === '/about'){
        res.end('Here is our vision and mision statement')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Sorry we cant find the page you are looking for</p>
    <a href="/">Go to home</a>
    `)
})

server.listen(5000)