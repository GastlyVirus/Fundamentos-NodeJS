const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

exec('node consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error('node consola.js / err', err);
        return false;
    }
    console.log('node consola.js / stdout:', stdout);
});


let proceso = spawn('ls', ['-la']);
console.log('proceso.pid', proceso.pid);
console.log('proceso.connected', proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('proceso.stdout.on / proceso.killed:', proceso.killed);
    console.log('proceso.stdout.on / dato.toString()', dato.toString());
});

proceso.on('exit', function(){
    console.log('proceso.on / El proceso termino');
    console.log('proceso.on / proceso.killed:', proceso.killed);
});