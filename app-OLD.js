
console.log('Hello World Web Server Sesion 05')


const http = require('http')


http.createServer(  (req,res)   =>{

    res.writeHead(200, {'Content-Type' : 'Text/plain'})
    res.write('Hello World Renderin from BackEnd')
    res.end()
})
.listen(8080)


console.log('Renderizando desde el puerto', 8080)