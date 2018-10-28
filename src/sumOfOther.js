module.exports = function sumOfOther(arr) {
  if (arr.length === 0) return arr;
  const sum = arr.reduce((acc, cur) => acc + cur);
  return arr.map(item => sum - item);
};
