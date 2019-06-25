function join(array, separador = ",") {
  let cadena = "";
  for (let i in array) {
    cadena += array[i] + separador;
  }
  return cadena.substring(0, cadena.length - 1);
}

export default join;
