const concat = (arr, ...elements) => {
  for (let index = 0; index < elements.length; index++) {
    arr.push(elements[index]);
  }
  return arr;
};

export default concat;
