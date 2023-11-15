const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('nueva peticion');
    console.log('req.url', req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola /hola');
            res.end();
            break;
        default:
            res.write('Error 404: No sé lo que quieres');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // res.write('Hola! Ya se usar HTTP de Node.JS')

    // res.end();
}

console.log('Escuchando http en el puerto 3000')