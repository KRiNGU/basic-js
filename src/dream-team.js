const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let idealTeam = '';
  if (typeof members != 'object' || members == null) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][j] != ' ') {
          idealTeam += members[i][j].toUpperCase();
          break;
        }
      }
    }
  }
  return idealTeam.split('').sort().join('');
};