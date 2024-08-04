// Operadores ternarios, una manera mas simplificada y rapida de usar el if, else

const nota = 80;

// if (nota > 90) {
//   console.log("Nota sobresaliente");
// } else if (nota >= 70) {
//   console.log("Buen Trabajo");
// } else {
//   console.log("Desaprovado");
// }

//Asi seria un ejemplo de Operadores ternarios, simpre se debe hacer una preguna "?" y luego cada variable separar
//con ":"

nota >= 90
  ? console.log("Nota sobresaliente")
  : nota >= 70
  ? console.log("Buen trabajo")
  : console.log("Desaprovado");
