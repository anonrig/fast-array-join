"use strict";

const assert = require("assert");
const join = require(".");

const cases = [
  [[], ","],
  [["a"], ","],
  [["a", "a"], ","],
  [["a", "a", "a"], ","],
  [["a", "a", "a", "a"], ","],

  [[2], ","],
  [[2, 2], ","],
  [[2, 2, 2], ","],
  [[2, 2, 2, 2], ","],
];

for (let i = 0; i < cases.length; ++i) {
  const [array, separator] = cases[i];
  assert(join(array, separator) === array.join(separator));
  assert(join(array) === array.join());
}
