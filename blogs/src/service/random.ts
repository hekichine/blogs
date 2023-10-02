const random = (array: number[] | string[]) => {
  return Math.floor(Math.random() * array.length);
};
export default random;
