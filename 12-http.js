const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('welcome to our page')
    
    }

    if(req.url === '/about'){
        res.end('Here is our short historysdbajasbjsbj')
    }

    res.end(`<h1>0ps</h>
    <p>We can't seem to find the page you are looking for</p>
    <a href ="/">back home</a>`)
    
})

server.listen(5000)
