'use strict';

export default function multiply(a, b) {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  if (a === '') {
    return '0';
  }
  if (b === '') {
    return '0';
  }
  const product = numA * numB;
  
  function toFixed(num) {
    let x = num;
    if (Math.abs(x) < 1.0) {
      const e = parseInt(x.toString().split('e-')[1], 10);
      if (e) {
        x *= 10 ** (e - 1);
        x = `0.${(new Array(e)).join('0')}${x.toString().substring(2)}`;
      }
    } else {
      let e = parseInt(x.toString().split('+')[1], 10);
      if (e > 20) {
        e -= 20;
        x /= 10 ** e;
        x += (new Array(e + 1)).join('0');
      }
    }
    return x;
  }
  
  const answer = toFixed(product);
  return `${answer}`;
}
