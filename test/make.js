const assert = require('assert');
const make = require('../src/make.js');

describe('make', () => {
  it('should test for a call with no arguments', () => {
    function sum(a, b) {
      return a + b;
    }
    const actual = make()(15)(34, 21, 666)()(41)(sum);
    assert.deepEqual(actual, 777);
  });
  it('1', () => {
    function sum(a, b) {
      return a + b;
    }
    const actual = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(actual, 777);
  });
  it('2', () => {
    function concat(a, b) {
      return `${a}${b}`;
    }
    const actual = make(6, 2)(1, 3)(4)(0)(concat);
    assert.deepEqual(actual, '621340');
  });
  it('3', () => {
    function multiply(a, b) {
      return a * b;
    }
    const actual = make(1, 2)(3, 4)(5, 6, 7)(8, 9)(multiply);
    assert.deepEqual(actual, 362880);
  });
  it('4', () => {
    function makeArray(a, b) {
      return [].concat(a, b);
    }
    const actual = make(10, 12)(4)(1, 5)(makeArray);
    assert.deepEqual(actual, [10, 12, 4, 1, 5]);
  });
});
