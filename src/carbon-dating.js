const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity > 15 || sampleActivity <= 0 || typeof(sampleActivity) != 'string' || parseInt(sampleActivity).toString() == 'NaN') {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};
