console.log('console.log');
console.info('console.info');
console.error('console.error');
console.warn('console.warn');


let tabla = [
    {
        nombre: 'Gaston',
        apellido: 'Rocha',
        edad: 19,
    },
    {
        nombre: 'Edgardo',
        apellido: 'Cafir',
        edad: 31,
    }
]
console.table(tabla);


console.group('console.group')
console.log('console.log');
console.info('console.info');
console.error('console.error');
console.warn('console.warn');
console.groupEnd('console.group')


console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');