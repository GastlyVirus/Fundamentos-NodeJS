function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('hola ' + nombre)
        miCallback(nombre);
    }, 1500)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla...');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre)
        otroCallback();
    }, 1000)
}

function conversacion(nombre, veces, callback) {
    if(veces >= 0){
        hablar(function () {
            conversacion();
        })
    }
}

console.log('Iniciando proceso...');

hola('gaston', function (nombre) {
    adios(nombre, function () {
        console.log('Terminamos')
    });
})

// hola('gaston', function (nombre) {

//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log('Terminando proceso...')
//                 });
//             })
//         })
//     })
// });