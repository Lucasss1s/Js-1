function calculadora() {
    let operacion;
    let numero1;
    let numero2;

    // Solicitar operación valida
    while (true) {
        operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");
        if (operacion === '+' || operacion === '-' || operacion === '*' || operacion === '/') {
            break;
        }else{
            alert("Operación no valida. Por favor ingrese una de las siguientes operaciones: +, -, *, /");
        }    
    }

    // Solicitar primer numero valido
    while (true) {
        numero1 = prompt("Ingrese el primer número:");
        if (numero1 !== null && numero1.trim() !== "" && !isNaN(numero1)) {
            numero1 = parseFloat(numero1);
            break;
        }else{
            alert("Por favor ingrese un número válido");
        }    
    }

    // Solicitar segundo numero valido
    while (true) {
        numero2 = prompt("Ingrese el segundo número:");
        if (numero2 !== null && numero2.trim() !== "" && !isNaN(numero2)) {
            numero2 = parseFloat(numero2);
            break;
        }else{
            alert("Por favor ingrese un número valido");
        }    
    }

    // Validar división por cero
    if (operacion === '/' && numero2 === 0) {
        alert("No se puede dividir por cero");
        return;
    }

    // Imprimir en consola los valores ingresados
    console.log(`Operación: ${operacion}`);
    console.log(`Número 1: ${numero1}`);
    console.log(`Número 2: ${numero2}`);

    // Realizar la operación según la opción ingresada
    let resultado;
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
    }

    // Imprimir el resultado en consola
    console.log(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`);

    // Mostrar el resultado en un mensaje de alerta
    alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`);
}

// Ejecutar la calculadora
calculadora();
