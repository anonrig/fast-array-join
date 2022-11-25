"use strict";

const path = require("node:path");
const { Worker } = require("node:worker_threads");

const BENCH_THREAD_PATH = path.join(__dirname, "bench-thread.js");

const benchmarks = [
  {
    name: 'empty',
    input: [],
  },
  {
    name: 'single',
    input: ["a"],
  },
  {
    name: 'small',
    input: "abc".split(""),
  },
  {
    name: 'large',
    input: "abcdefgh".repeat(100).split(""),
  },
  
];

async function runBenchmark(benchmark) {
  const worker = new Worker(BENCH_THREAD_PATH, { workerData: benchmark });

  return new Promise((resolve, reject) => {
    let result = null;
    worker.on("error", reject);
    worker.on("message", (benchResult) => {
      result = benchResult;
    });
    worker.on("exit", (code) => {
      if (code === 0) {
        resolve(result);
      } else {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function runBenchmarks() {
  let maxNameLength = 0;
  for (const benchmark of benchmarks) {
    maxNameLength = Math.max(benchmark.name.length, maxNameLength);
  }

  for (const benchmark of benchmarks) {
    benchmark.name = benchmark.name.padEnd(maxNameLength, " ");
    const nativeResultMessage = await runBenchmark({ type: 'native', ...benchmark });
    console.log(nativeResultMessage);
    const resultMessage = await runBenchmark({ type: 'fast-array-join', ...benchmark });
    console.log(resultMessage);
  }
}

runBenchmarks();