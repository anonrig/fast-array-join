"use strict";

const join = (output, separator = ",") =>
  output.reduce((result, chunk) => result + separator + chunk, "");

module.exports = join;
module.exports.default = join;
module.exports.join = join;
