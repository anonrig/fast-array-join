"use strict";

function join(output, separator = ",") {
  let str = "";
  if (output.length !== 0) {
    const lastIndex = output.length - 1;
    for (let i = 0; i < lastIndex; i++) {
      // It is faster not to use a template string here
      str += output[i];
      str += separator;
    }
    str += output[lastIndex];
  }
  return str;
}

module.exports = join;
module.exports.default = join;
module.exports.join = join;
