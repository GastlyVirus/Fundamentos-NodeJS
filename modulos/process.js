// const process = require('process');
// console.log("process:", process)

process.on('beforeExit', () => {
    console.log('Gaston, el proceso va a terminar')
})

process.on('exit', () => {
    console.log('Gaston, el proceso termino')
})

// process.on('uncaughtException', (err, origen) => {
//     console.error('Gaston, vaya se te olvido capturar un error');
//     console.error('uncaughtException / err:', err)
// })
// funcionQueNoExiste();