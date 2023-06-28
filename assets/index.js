//Ejercicio 1
function probarParidad(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
  } else {
    console.log(numero + " es un número impar.");
  }
}

//Ejercicio 2
function comparandoNumeros(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log("Los números son iguales");
  }
}

//Ejercicio 3
function verificarMultiploDe5(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5.");
  } else {
    console.log(numero + " no es múltiplo de 5.");
  }
}

//Ejercicio 4
function imprimirNumeros(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

//Ejercicio 5
function imprimirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

// Ejercicio 6
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Ejercicio 7
function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}
// Ejercicio 8
function multiplicarArrayPorNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * numero;
    console.log(resultado);
  }
}
