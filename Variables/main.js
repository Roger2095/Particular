//Variables

var numeroA = 233;
var textoA = "Hola";

console.log(numeroA);
console.log(textoA);

var numeroA = 999;

console.log(numeroA);

//En este ejemplo cuando declaro var esa variable es a nivel global, puedo volver a declarar y tambien cambiar el valor

let numeroB = 320;
let textoB = "chau";

console.log(numeroB);
console.log(textoB);

numeroB = 980;

console.log(numeroB);

// let no la podemos volver a declarar una vez ya hecha, pero si podemos cambiarle el valor

const numeroC = 550;
const textoC = "const";

console.log(numeroC);
console.log(textoC);

// Una variable const, no la podemos volver a declarar, pero tampoco cambiarle el valor.
// por ejemplo asi
// const numeroC= 555
// numeroC = 555 - tampoco lo tomaria de esta manera como let
