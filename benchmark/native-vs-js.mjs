import benchmark from "cronometro";
import fastJoin from "../index.js";

const largeArray = "abcdefgh".repeat(100).split("");

await benchmark({
  "Array.prototype.join"() {
    return largeArray.join("-");
  },
  "fast-array-join"() {
    return fastJoin(largeArray, "-");
  },
});
