const assert = require('assert');
const sumOfOther = require('../src/sumOfOther.js');

describe('sumOfOther', () => {
  it('should test for an empty array', () => {
    const actual = sumOfOther([]);
    assert.deepEqual(actual, []);
  });
  it('1', () => {
    const actual = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(actual, [8, 7, 6, 9]);
  });
  it('2', () => {
    const actual = sumOfOther([11, 0, 2, 8, 5]);
    assert.deepEqual(actual, [15, 26, 24, 18, 21]);
  });
  it('3', () => {
    const actual = sumOfOther([6, 4, 3, 2, 10, 15, 6, 4, 3, 3]);
    assert.deepEqual(actual, [50, 52, 53, 54, 46, 41, 50, 52, 53, 53]);
  });
  it('4', () => {
    const actual = sumOfOther([0, 0, 0, 0, 0]);
    assert.deepEqual(actual, [0, 0, 0, 0, 0]);
  });
  it('5', () => {
    const actual = sumOfOther([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
    assert.deepEqual(actual, [5, 4, 5, 4, 5, 4, 5, 4, 5, 4]);
  });
  it('6', () => {
    const actual = sumOfOther([468, 329, 651, 812, 320, 256, 711]);
    assert.deepEqual(actual, [3079, 3218, 2896, 2735, 3227, 3291, 2836]);
  });
  it('7', () => {
    const actual = sumOfOther([0]);
    assert.deepEqual(actual, [0]);
  });
});
