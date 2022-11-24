# fast-array-join

[![NPM version](https://img.shields.io/npm/v/fast-array-join.svg?style=flat)](https://www.npmjs.com/package/fast-array-join)

`fast-array-join` is a %61 faster array join function compared to `Array.prototype.join`.

Taken from [Node.js repository](https://github.com/nodejs/node/blob/main/lib/internal/util.js#L388) and authored by [@BridgeAR](http://github.com/BridgeAR)

### Installation

```
npm i fast-array-join
```

### Usage

```javascript
const fastJoin = require('fast-array-join')

const input = ['hello', 'world']

console.log(fastJoin(input, ' '))
// "hello world"
```

### Benchmark



```
> node benchmark/native-vs-js.mjs

╔══════════════════════╤═════════╤══════════════════╤═══════════╗
║ Slower tests         │ Samples │           Result │ Tolerance ║
╟──────────────────────┼─────────┼──────────────────┼───────────╢
║ Array.prototype.join │    4500 │  96622.01 op/sec │  ± 1.00 % ║
╟──────────────────────┼─────────┼──────────────────┼───────────╢
║ Fastest test         │ Samples │           Result │ Tolerance ║
╟──────────────────────┼─────────┼──────────────────┼───────────╢
║ fast-array-join      │   10000 │ 155072.20 op/sec │  ± 2.08 % ║
╚══════════════════════╧═════════╧══════════════════╧═══════════╝```
```
