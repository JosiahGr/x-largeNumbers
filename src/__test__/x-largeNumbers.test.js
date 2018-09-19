'use strict';

import multiply from '../modules/x-largeNumbers';

describe('#multiply', () => {
  test('for small numbers', () => {
    expect(multiply('2', '2')).toEqual('4');
    expect(multiply('3', '3')).toEqual('9');
    expect(multiply('10', '10')).toEqual('100');
  });
  test('for edge cases', () => {
    expect(multiply('a', '2')).toEqual('NaN');
    expect(multiply('0', '2')).toEqual('0');
  });
  test('for really large numbers', () => {
    expect(multiply('222222222', '222')).toEqual();
    expect(multiply('222222222', '500')).toEqual();
    expect(multiply('222222222', '200')).toEqual();
  });
});
