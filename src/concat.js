function concat(array1, ...array2) {
  for (let i in array2) {
    array1.push(array2[i]);
  }
  return array1;
}

export default concat;
