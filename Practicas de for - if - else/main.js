// //Practicas con edad sin arrays

// let edad = 31;

// if (edad < 20) {
//   console.log("Menor de edad");
// } else if (edad > 20 && edad < 30) {
//   console.log("Mayor de edad");
// } else {
//   console.log("Pasa el limite de edad");
// }

// //Ejercicio Practica

// for (let i = 10; i >= 0; i--) {
//   console.log(`Cuenta regresiva ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Cuenta en adelante ${i}`);
// }

let Numeros = "1,2,3,4,5,6,7,8,9,10";

for (let i = 0; i < Numeros.length; i++) {
  if (i % 3 === 0) {
    console.log("Es divisible por 3");
  }
}
