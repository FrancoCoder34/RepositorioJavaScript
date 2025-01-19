
const operacionesDisponibles = ["sumar", "restar", "multiplicar", "dividir"];
let resultado = 0;


function obtenerDatos() {
    let operacion = prompt("¿Qué operación deseas realizar? (sumar, restar, multiplicar, dividir)").toLowerCase();
    if (!operacionesDisponibles.includes(operacion)) {
        alert("Operación no válida, por favor elige entre 'sumar', 'restar', 'multiplicar' o 'dividir'.");
        return;
    }

    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    procesarOperacion(operacion, numero1, numero2);
}


function procesarOperacion(operacion, num1, num2) {
    switch (operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                alert("¡Error! No se puede dividir entre cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operación no reconocida.");
            return;
    }
    mostrarResultado();
}


function mostrarResultado() {
    alert("El resultado de la operación es: " + resultado);
    console.log("El resultado es: " + resultado);
}


obtenerDatos();
