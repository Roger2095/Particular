//Operadores

let numeroUno = 10;
let numeroDos = 20;
let textoUno = "Lionel";
let textoDos = "Messi";

//suma

let resultadoSuma = numeroUno + numeroDos;
console.log(resultadoSuma);

let otroresultadoSuma = textoUno + " " + textoDos; //En este caso la suma normal quedarian el texto pegado pero al sumar un espacio entre comillas es posible separarlos
console.log(otroresultadoSuma);

//resta

let resultadoResta = numeroDos - numeroUno;
console.log(resultadoResta);

let otroresultadoResta = textoDos - textoUno;
console.log(otroresultadoResta); //En esto caso nos tira "Nan" un nother number, ya que no se puede restar textos.

//multiplicacion

let resultadoMultiplicacion = numeroDos * numeroUno;
console.log(resultadoMultiplicacion);

//dividir

let resultadodivision = numeroDos / numeroUno;
console.log(resultadodivision);

//Incrementador

//console.log(++numeroUno); //esto lo que hace al agrega ++ al comienza es sumarle una unidad mas

//let resultadoincrementador = ++numeroUno * numeroDos;
//console.log(resultadoincrementador);

//decrementador

let resultadodecrementador = --numeroUno * numeroDos; // acá pasa lo mismo solo que en este caso resta una unidad al valor y luego resuelve la operacion.

console.log(resultadodecrementador);
