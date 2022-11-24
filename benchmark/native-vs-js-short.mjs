import benchmark from "cronometro";
import fastJoin from "../index.js";

const shortArray = "abc".split("");

await benchmark({
  "Array.prototype.join"() {
    return shortArray.join("-");
  },
  "fast-array-join"() {
    return fastJoin(shortArray, "-");
  },
});
