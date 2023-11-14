function otraFuncion() {
    seRompe();
}


function seRompe() {
    return 3 + z;
}


function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z
        } catch (error) {
            console.error('Algo se rompio (seRompeAsincrona): ', error);
            cb(error)
        }

    })
}


try {
    // otraFuncion();
    seRompeAsincrona(function(){
        console.log('Hay error CB')
    });
} catch (error) {
    console.error('Algo se rompio:', error.message)
    console.error(error)
}

console.log('Esto de aqui esta al final');