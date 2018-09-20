'use strict';

import multiply from '../modules/x-largeNumbers';

describe('#multiply', () => {
  test('for small numbers', () => {
    expect(multiply('2', '2')).toEqual('4');
    expect(multiply('3', '3')).toEqual('9');
    expect(multiply('', '10')).toEqual('0');
  });
  test('for edge cases', () => {
    expect(multiply('a', '2')).toEqual('NaN');
    expect(multiply('0', '2')).toEqual('0');
  });
  test('for really large numbers', () => {
    expect(multiply('222222222', '222')).toEqual('49333333284');
    expect(multiply('222222222', '500')).toEqual('111111111000');
    expect(multiply('222222222', '200')).toEqual('44444444400');
  });
  test('for really-REALLY large numbers', () => {
    expect(multiply('2234234453453454352222', '22223435234534534534')).toEqual('49652364675088510000000000000000000000000');
    expect(multiply('22234534534345345345222', '534534534534500')).toEqual('11885126567907556000000000000000000000');
    expect(multiply('22345345343453453454352222', '24564565465462342342300')).toEqual('548903698537626500000000000000000000000000000000');
  });
});
