'use strict';

export default function multiply(a, b) {
  const numA = parseInt(a, 10);
  const numB = parseInt(b, 10);
  const product = numA * numB;

  return `${product}`;
}
