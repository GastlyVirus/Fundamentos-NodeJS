const os = require('os');

console.log('os:', os);
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);
console.log('os.constants:', os.constants);
console.log('os.freemem:', os.freemem());
console.log('os.totalmem:', os.totalmem());

const SIZE = 1024;

function kb(bytes){
    return bytes / SIZE;
}
console.log(kb(os.freemem()));

function mb(bytes){
    return kb(bytes) / SIZE;
}
console.log(mb(os.freemem()));

function gb(bytes){
    return mb(bytes) / SIZE;
}
console.log(gb(os.freemem()));

console.log('os.homedir():', os.homedir())
console.log('os.tmpdir():', os.tmpdir())
console.log('os.hostname():', os.hostname())
console.log('os.networkInterfaces():', os.networkInterfaces())