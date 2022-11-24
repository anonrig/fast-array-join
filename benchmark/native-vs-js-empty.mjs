import benchmark from "cronometro";
import fastJoin from "../index.js";

const emptyArray = [];

await benchmark({
  "Array.prototype.join"() {
    return emptyArray.join("-");
  },
  "fast-array-join"() {
    return fastJoin(emptyArray, "-");
  },
});
