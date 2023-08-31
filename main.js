function bienvenida() {
  alert("Bienvenido a la calculadora de Precios");
  let nombre = prompt("Por favor ingresa tu Nombre");
  alert(
    `Hola ${nombre}, esta aplicacion te va a ayudar a sumar el precio de tus productos y calcular tus cuotas.`
  );
}
function PrecioProductos() {
  
  let precios = parseFloat(prompt("Ingresa el precio de tus productos"));

  while (isNaN(precios)) {
    precios = parseFloat(prompt("Ingrese un numero valido"));
  }
  return precios;
}


function sumaPrecios() {
    bienvenida();

    let cantidad = parseInt(prompt("¿Cuantos Productos deseas agregar?"));
    let suma = 0;
    
    for (let i = 0; i < cantidad; i++) {
        const numero = PrecioProductos();
        suma += numero;
        
    }
    return suma;
}
const resultado = sumaPrecios();
alert(`La suma total es: ${resultado}`);