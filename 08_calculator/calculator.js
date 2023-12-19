const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let sum = 0;
  if (a.length === 0) {
    return sum;
  } else {
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
  }
  return sum;
};

const multiply = function (a) {
  let product = 1;
  if (a.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < a.length; i++) {
      product *= a[i];
    }
  }
  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let factProd = 1;
  if(a === 0){
    return factProd;
  }
  else {
    for (let i = a; i > 0; i--){
      factProd *= i;
      console.log('instance', a)
      console.log('result', factProd);
    }
  }
  return factProd;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
