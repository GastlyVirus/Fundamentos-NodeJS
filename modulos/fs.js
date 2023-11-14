const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString())
    })
}

leer(__dirname + '/archivo.txt')


function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log('No he podido escribirlo', err)
        } else {
            console.log('Se escribio correctamente!')
        }
    })
}

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)


function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

borrar(__dirname + '/archivo1.txt', console.log)