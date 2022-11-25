"use strict";

const { workerData: benchmark, parentPort } = require("node:worker_threads");

const Benchmark = require("benchmark");
Benchmark.options.minSamples = 100;

const suite = Benchmark.Suite();

const join = require("..").join;

switch (benchmark.type) {
  case "fast-array-join":
    suite.add(`${benchmark.type}: ${benchmark.name}`, () => {
      join(benchmark.input);
    });
    break;
  case "native":
    suite.add(`${benchmark.type}: ${benchmark.name}`, () => {
      benchmark.input.join();
    });
    break;
}

suite.on("cycle", (event) => {
  parentPort.postMessage(String(event.target));
}).run();
