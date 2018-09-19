'use strict';

import multiply from '../modules/x-largeNumbers';

describe('#multiply', () => {
  test('for small numbers', () => {
    expect(multiply('2', '2', '2')).toEqual('8');
    expect(multiply('3', '3', '4')).toEqual('36');
    expect(multiply('10', '10', '2')).toEqual('200');
  });
  test('for edge cases', () => {
    expect(multiply('a', '2', '2')).toEqual('NaN');
  });
  test('for really large numbers', () => {
    expect(multiply('222222222', '222')).toEqual();
    expect(multiply('222222222', '500')).toEqual();
    expect(multiply('222222222', '200')).toEqual();
  });
});