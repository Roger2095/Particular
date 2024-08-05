// Crear un objeto literal

let auto = {
  marca: "ford", //aca el value es un string
  modelo: "fiesta", //string
  anio: 2008, //number
  color: ["rojo", "azul", "verde"], //array
  seguro: true, //boleans
  combustible: "nafta", //string
};

console.log(auto);

console.log(auto["anio"]); //para acceder al subindice dentro del objeto dentro
// de console, es abriendo "[]", y pasarlo a un string "", para que tome el value

console.log(auto.color); //este es otro manera de acceder a las propiedad agregan el value y seguido "."

auto.anio = 2010; //una vez antes declarado la variable, tambien le podemos reasginas
//un nuevo valor como este ejemplo

console.log(auto.anio);

auto.patente = "wer123"; //aca le podemos asignar una nueva propiedad al objeto dentro

console.log(auto);

//Practica

auto.vencimiento = "20 / 02 / 2025"; //string

auto.estado = ["Safable", 2, 3]; //array con numbers y un string
