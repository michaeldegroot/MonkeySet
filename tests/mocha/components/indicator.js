const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')
const tulind = require('tulind')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(10)

const workset = monkeyset
  .fetch('sets')
  .last(10)
  .ohlc()
  .result()

for (let index in tulind.indicators) {
  const indicator = tulind.indicators[index]
  let options = {
    input1: 'close',
    input2: 'open'
  }

  for (let i = indicator.options - 1; i >= 0; i--) {
    let value = 4

    if (indicator.option_names[i] == 'alpha') value = 0.2
    if (indicator.option_names[i] == 'acceleration factor step') value = 0.2

    options[indicator.option_names[i]] = value
  }

  it('monkeyset.indicator.' + index, async () => {
    monkeyset.chain.sets = workset
    const output = await monkeyset.Indicator[index](options)

    assert(Object.keys(output).length == indicator.outputs)
  })
}
