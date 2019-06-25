function every(array, f) {
  let contador = 0;
  for (let i in array) {
    if (f(array[i])) {
      contador += 1;
    }
  }
  if (contador === array.length) {
    return true;
  } else {
    return false;
  }
}
export default every;
