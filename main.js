function bienvenida() {
  alert("Bienvenido a la calculadora de Precios");
  let nombre = prompt("Por favor ingresa tu Nombre");
  alert(
    `Hola ${nombre}, esta aplicacion te va a ayudar a sumar el precio de tus productos y calcular tus cuotas.`
  );
}
function cantidadProductos() {
  bienvenida();
  let cantidades = parseFloat(prompt("¿Cuántos productos deseas calcular?"));

  while (isNaN(cantidades)) {
    cantidades = parseFloat(prompt("Ingrese un numero valido"));
  }
  return cantidades;
}
cantidadProductos();