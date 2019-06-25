function pop(array) {
  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}
export default pop;
