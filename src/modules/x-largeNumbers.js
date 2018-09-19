'use strict';

function multiply(a, b) {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  const product = numA * numB;

  return `${product}`;
}

function bigNum(int) {
  if (Math.abs(int) < 1.0) {
    const e = parseInt(x.toString().split('e-')[1]);
    let x = int;
    if (e) {
      x *= Math.pow(10, e - 1);
      x = `0.${(new Array(e)).join('0')}${x.toString().substring(2)}`;
    }
  } else {
    let e = parseInt(x.toString().split('+')[1]);
    let x = int;
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      x += (new Array(e + 1)).join('0');
    }
  }
  return x;
}
