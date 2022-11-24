import benchmark from "cronometro";
import fastJoin from "../index.js";

const singleArray = ["a"];

await benchmark({
  "Array.prototype.join"() {
    return singleArray.join("-");
  },
  "fast-array-join"() {
    return fastJoin(singleArray, "-");
  },
});
