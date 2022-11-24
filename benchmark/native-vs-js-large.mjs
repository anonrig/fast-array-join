import benchmark from "cronometro";
import fastJoin from "../index.js";

const emptyArray = [];
const shortArray = "abc".split("");
const largeArray = "abcdefgh".repeat(100).split("");

await benchmark({
  "Array.prototype.join"() {
    return emptyArray.join("-") + shortArray.join("-") + largeArray.join("-");
  },
  "fast-array-join"() {
    return (
      fastJoin(emptyArray, "-") +
      fastJoin(shortArray, "-") +
      fastJoin(largeArray, "-")
    );
  },
});
