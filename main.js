function bienvenida() {
  alert("Bienvenido a la calculadora de Precios");
  let nombre = prompt("Por favor ingresa tu Nombre");
  alert(
    `Hola ${nombre}, esta aplicación te va a ayudar a sumar el precio de tus productos y calcular tus cuotas.`
  );
}

function PrecioProductos() {
  let precios = parseFloat(prompt("Ingresa el precio de tus productos"));

  while (isNaN(precios)) {
    precios = parseFloat(prompt("Ingrese un número válido"));
  }
  return precios;
}

function sumaPrecios() {
  bienvenida();

  let cantidad = parseInt(prompt("¿Cuántos productos deseas agregar?"));
  let suma = 0;

  for (let i = 0; i < cantidad; i++) {
    const numero = PrecioProductos();
    suma += numero;
  }
  return suma;
}

function calcularCuotas() {
  let resultado = sumaPrecios();
  alert(`La suma total de tus productos es: ${resultado}`);
  let opcion = prompt(
    "¿Te gustaría saber cuál es el importe de tus productos en cuotas?"
  );

  if (opcion.toUpperCase() == "SI") {
    let cuotas = parseInt(prompt("Podes elegir entre 1, 3, 6 o 12"));

    while (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12) {
      alert("Las opciones de cuotas son: 1, 3, 6 o 12");
      cuotas = parseInt(prompt("Cantidad de cuotas"));
    }

    importeCuotas(resultado, cuotas); // Pasamos los valores a la función importeCuotas
  } else {
    alert("Gracias por usar nuestra Aplicacion.");
  }
}

function importeCuotas(resultado, cuotas) {
  let importeCuota = resultado / cuotas;
  let decimales = importeCuota.toFixed(2);
  alert(`Vas a pagar ${cuotas} cuotas de: $${decimales}`);
  alert("Gracias por usar nuestra Aplicacion.");
}

calcularCuotas();
