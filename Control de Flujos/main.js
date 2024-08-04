// if ("lo que esta aca adentro es true")
// {"lo que esta aca adentro, se va a ejecutar"}

let altura = 7;

if (altura < 7) {
  console.log("sos de estatura baja");
} else if (altura > 7) {
  console.log("sos de estatura alta");
} else {
  console.log("sos de altura normal");
}

//switch

let Tecnologia = "JavaScript";

switch (Tecnologia) {
  case "HTML":
    console.log("Suerte con las etiquetas");
    break;
  case "CSS":
    console.log("Suerte con darle estilos a la pagina");
    break;
  case "JavaScript":
    console.log("Bienvenido a JS");
    break;
  case "React":
    console.log("Maneja bien los estados");
    break;
  default:
    console.log("No estas estudiando sobre Front");
    break;
}

//Ejemplo de if, else

let edad = 20;

if (edad > 18) {
  console.log("Sos Adulto");
} else if (edad < 20) {
  console.log("Sos menor de edad");
} else {
  console.log("tenes la edad justa");
}
