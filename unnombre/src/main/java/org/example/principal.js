/*// Importar RxJS
const { from } = require('rxjs');
const { filter, map, scan, concatMap }= require('rxjs/operators');

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
const lista1 = ["A", "B", "C", "D", "F"];
const lista2 = ["Andrés", "Bernardo", "Camila", "Daniela"];
const lista3 = [5, 6, 4, 8, 9, 3, 2];
const lista4 = [4, 6, 0, 9];

const obsConcatenar = concat(from(lista1), from(lista2), from(lista4));
obsConcatenar.subscribe(r => {
    console.log(`Resultado de la concatenación: ${r}`);
});

// Crear dos Observables desde los arrays
// const observable1 = from(array1);
// const observable2 = from(array2);

const obs1 = from(lista1).
pipe(concatMap(numero => from([numero]).pipe(delay(1000))));
const obs2 = from(lista2).
pipe(concatMap(numero => from([numero]).pipe(delay(2000))));

const concatenar = concat(obs1, obs2); // Use las dos listas de números

// Suscribirse al Observable resultante
concatenar.subscribe(r => {
    console.log(`Resultado de la concatenación 2: ${r}`);
})
console.log(`Concatenado 2 terminado!\n`)


const observableNums = from(lista3);

const numsPar = observableNums.pipe(
    filter(num => num % 2 === 0),  // Filtrar números pares
    map(num => num * 2),  // Multiplicar cada número par por 2
    scan((acc, num) => acc + num));  // Acumular la suma de los números

numsPar.subscribe(r => {
    console.log('La suma de los números pares es:', r);
    console.log("Sumado!")
})
console.log(`Suma Finalizada...\n`)


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