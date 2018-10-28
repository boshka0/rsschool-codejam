const assert = require('assert');
const recursion = require('../src/recursion.js');

describe('recursion', () => {
  it('should test for an empty tree', () => {
    const tree = {};
    const actual = recursion(tree);
    assert.deepEqual(actual, []);
  });
  it('1', () => {
    const tree = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[100], [90, 120], [70, 99, 110, 130]]);
  });
  it('2', () => {
    const tree = { value: 100 };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[100]]);
  });
  it('3', () => {
    const tree = { value: 66, left: { value: 53, left: { value: 49 } }, right: { value: 100, right: { value: 102 } } };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[66], [53, 100], [49, 102]]);
  });
  it('4', () => {
    const tree = { value: 10, left: { value: 4, left: { value: 3 }, right: { value: 5, right: { value: 7, right: { value: 9 } } } }, right: { value: 16, left: { value: 14 } } };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[10], [4, 16], [3, 5, 14], [7], [9]]);
  });
  it('5', () => {
    const tree = { value: 20, left: { value: 10, left: { value: 8, left: { value: 5, right: { value: 7 } } }, right: { value: 11 } }, right: { value: 45, left: { value: 36, left: { value: 30 }, right: { value: 37, right: { value: 39, left: { value: 38 }, right: { value: 43, right: { value: 44 } } } } }, right: { value: 49 } } };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[20], [10, 45], [8, 11, 36, 49], [5, 30, 37], [7, 39], [38, 43], [44]]);
  });
  it('6', () => {
    const tree = { value: 5, right: { value: 10, left: { value: 9 }, right: { value: 13 } } };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[5], [10], [9, 13]]);
  });
  it('7', () => {
    const tree = { value: 28, left: { value: 19, left: { value: 17 }, right: { value: 24, right: { value: 25 } } }, right: { value: 30, left: { value: 29 }, right: { value: 32 } } };
    const actual = recursion(tree);
    assert.deepEqual(actual, [[28], [19, 30], [17, 24, 29, 32], [25]]);
  });
});
