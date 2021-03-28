const CustomError = require("../extensions/custom-error");

const chainMaker = {
  length: 0,
  chain: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chain.push(value.toString());
    this.length++;
  },
  removeLink(position) {
    this.chain = this.chain.splice(position, 1);
  },
  reverseChain() {
    this.chain = this.chain.reverse();
  },
  finishChain() {
    let result = '';
    for (const elem in this.chain) {
      if (elem == null){
        result += '~~( )';
      }
      else{
        result += '~~( ' + elem + ' )'
      }
    }
    return result.splice(2);
  }
};


