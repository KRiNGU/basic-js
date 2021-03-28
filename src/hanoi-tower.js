const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moveNum = 2**disksNumber - 1;
  let time = Math.floor(3600 / turnsSpeed * moveNum);
  return {turns: moveNum, seconds: time};
};
