module.exports = function make(...a) {
  const array = [...a];
  function b(...args) {
    if (typeof args[0] === 'function') return array.reduce(args[0]);
    array.push(...args);
    return b;
  }
  return b;
};
