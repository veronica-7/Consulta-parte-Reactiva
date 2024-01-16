
/*// Importar RxJS
const { from } = require('rxjs');
const { filter, map, scan, concatoncatMap }= require('rxjs/operators');

// Crear un array de números
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un Observable desde el array
const observableNums = from(lista);

// Aplicar operadores para sumar los números pares
const numsPar = observableNums.pipe(
    filter(num => num % 2 === 0),  // Filtrar números pares
    map(num => num * 2),  // Multiplicar cada número par por 2
    scan((acc, num) => acc + num)  // Acumular la suma de los números
);

// Suscribirse al Observable resultante
numsPar.subscribe(resultado => {
    console.log('La suma de los números pares es:', resultado);
});*/

// Importar RxJS
const { from } = require('rxjs');
const { filter, map, scan, concat, delay, concatMap } = require('rxjs');

// Arrays de números
const lista1 = [5, 8, 2, 0, 4];
const lista2 = [2, 1, 7, 8, 1];

// Crear dos Observables desde los arrays
// const observable1 = from(array1);
// const observable2 = from(array2);

const obs1 = from(lista1).pipe(concatMap(numero => from([numero]).pipe(delay(1000))));

const obs2 = from(lista2).pipe(concatMap(numero => from([numero]).pipe(delay(2000))));

const resultante = concat(obs1, obs2);

// Suscribirse al Observable resultante
resultante.subscribe(resultado => {
    console.log(`Resultado de la concatenación: ${resultado}`);

})

console.log(`Realizado`)


/*const { from, of} = require("rxjs");

const { delay, concatMap } = require("rxjs/operators");

const frutas = ["pera", "sandía", "mora", "fresa", "manzana"];

// Observable

console.log(`Ya hice mi pedido`)

const frutasObs = from(frutas).pipe(
    concatMap(p => of(p).pipe(delay(1000)))
);

frutasObs.subscribe((frutas) => {
    console.log(`Me llegó una ${frutas}`)
})

console.log(`Me llegó mi pedido`)*/