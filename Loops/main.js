// Bucle For
// for (inicio, condicion, actualizacion) {
// codigo a ejecutar }

//for (let i = 0; i < 11; i++) {
//console.log(`Esto es una escala en ${i}`); //Aca reemplazamos las comillas por los Backticks "``"
//}

//for (let i = 10; i >= 0; i--) {
// console.log(`Esto es una cuenta regresiva ${i}`);
//}

// WHILE
// while (condicion) {
// codigo a ejecutar }

let condiciondelwhile = 0;

// while (condiciondelwhile < 10) {
//   console.log(`el while esta en ${condiciondelwhile}`);
//   condiciondelwhile++;
// }

while (condiciondelwhile < 10) {
  if (condiciondelwhile === 5) {
    console.log(`la variable esta en el ${condiciondelwhile}`);
  }
  condiciondelwhile++;
}

//DO WHILE

let condiciondelDowhile = 1;

do {
  console.log(condiciondelDowhile);
  condiciondelDowhile++;
} while (condiciondelDowhile <= 10);

//Ejemplo de bucle con for

for (let i = 1; i <= 50; i++) {
  console.log(`Estamos en la iteación numero ${i}`);
}
