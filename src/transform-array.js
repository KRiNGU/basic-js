const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Object.prototype.toString.call(arr) != '[object Array]'){
    throw new Error();
  }
  let transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (arr[i-2] != '--discard-next'){
        transformedArray.pop();
        }
        break;
      case '--double-next':
        if (arr[i+1] != undefined){
          transformedArray.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if (arr[i-1] != undefined && arr[i-2] != '--discard-next'){
        transformedArray.push(arr[i-1]);
        }
        break;
      default:
        transformedArray.push(arr[i]);
        break;
    }
  }
  return transformedArray;
};
