const convertToCelsius = function(degInF) {
  let answer = (degInF - 32)*(5/9);
  return Math.round(answer * 10) / 10;
};

const convertToFahrenheit = function(degInC) {
  let answer = (degInC * (9/5)) + 32;
  return Math.round(answer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
