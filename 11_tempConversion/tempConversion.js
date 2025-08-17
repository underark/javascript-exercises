const convertToCelsius = function(degreeF) {
  return Number.parseFloat(((degreeF - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(degreeC) {
  return Number.parseFloat(((degreeC * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
