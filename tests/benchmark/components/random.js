const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset

const suite = new Benchmark.Suite('app')

suite.add({
  name: 'monkeyset.Random.setsFill',
  fn: done => {
    monkeyset.Random.setsFill(1)
  },
  onStart: () => {
    monkeyset = new MonkeySet()
  }
})

// called when the suite starts running
suite.on('start', () => {})

// called between running benchmarks
suite.on('cycle', function(event) {
  console.log(String(event.target))
})

// called when aborted
suite.on('abort', () => {
  console.log('bench aborted')
})

// called when a test errors
suite.on('error', e => {
  console.log('bench error', e)
})

suite.on('complete', () => {
  process.exit()
})

suite.run({ async: false })
