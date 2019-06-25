function find(array, f) {
  let ar1 = [];
  for (let i in array) {
    if (f(array[i])) {
      ar1.push(array[i]);
    }
  }
  return ar1[0];
}
export default find;
