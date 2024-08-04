//Operadores de comparacion

// Comparador de igualdad

console.log(5 == 5);
console.log(5 == "5");
console.log("5" == 5);

console.log("desigualdad");

console.log(5 != 5);
console.log("5" != "5");
console.log("5" != 5);

console.log("mayor que");

console.log(5 > 4);
console.log("5" > "4");
console.log(5 > "4");

console.log("mayor o igual que");

console.log(5 >= 5);
console.log("5" >= "5");

console.log("menor que");

console.log(5 < 6);
console.log("5" < 6);

console.log("menor que o igual");

console.log(5 <= 5);
console.log("5" <= "6");

//And

console.log("and");

console.log(5 < 10 && 10 > 5);
console.log(5 > 10 && 10 > 5); //aca solo de cumple una de las funciones en este caso queda "false"

//Or

console.log("Or");

console.log(5 < 10 || 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(5 > 10 || 10 < 5);

//Negar

console.log("Negar");

let algofalse = 5 > 10;
let algotrue = 5 < 10;

console.log(algofalse);
console.log(!algotrue); //En este caso para negar algo solo debemos agregar al comienzo del valor un "!", con esto estamos negandolo, esto nos sirve para decirle a JS en algunos casos que se saltee esta parte
