// Importar la biblioteca RxJS
const { from } = require('rxjs');
const { tap } = require('rxjs/operators');

// Crear un observable que emite números del 1 al 5
const observable = from([1, 2, 3, 4, 5]);

// Suscribir un observador que imprime los números
const obs = observable.pipe(
    tap(num => console.log(`JavaScript: ${num}`))
).subscribe();


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