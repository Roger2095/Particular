// Arrays
let miarray = [1, 2, 3, 4, 5, 6];

console.log(miarray);

let miarrayvariado = [2, "Global Academy", true];

console.log(miarrayvariado);

console.log(miarrayvariado[2]); //Recordar siempre que en los arrays se cuenta desde 0 y para buscar un subindice dentro console agrega "[]"

console.log(miarray.length); // Esto cuenta la cantidad de elementos dentro de mi array ".length"

// Practica con for

for (let i = 0; i < miarray.length; i++) {
  console.log(miarray[i]);
}

for (let i = 0; i < miarrayvariado.length; i++) {
  console.log(miarrayvariado[i]);
}

//practica 2 Bucle con for y arrays

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Numeros);

for (let i = 0; i <= Numeros.length; i++) {
  console.log(`esto es la posicion actual ${i}`);
}
