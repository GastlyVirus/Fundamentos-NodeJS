console.log('Primera Instruccion');

let i = 0;
setInterval(function () {
    console.log(i);
    i++;

    if (i === 5) {
        console.log('Forzamos Error');
        let a = 3 + z;
    }

}, 1000);


console.log('Segunda Instruccion');