const component = require('../classes/component')
const tulind = require('tulind')

class Indicator extends component {
  /**
   * Indicator component houses all indicators to use on a MonkeySet, please
   * note that if you are missing any inputs or options the script will throw
   * a error and let you know what it needs
   * @summary Creating indicators from a MonkeySet
   * @class Indicator
   * @memberof MonkeySet
   * @hideconstructor
   * @example
   * const rsi = await monkeyset.fetch('sets').last(50).rsi({
   *     period: 5
   *     real: 'close'
   * })
   *
   * const rsi = await monkeyset.fetch('column', 'close').last(50).rsi({
   *     period: 5
   * })
   */
  constructor(...args) {
    super(...args)

    // Load all tulip indicators
    this.tulind = tulind
    for (let indicator in tulind.indicators) {
      this[indicator] = async data => {
        const indicatorFunction = tulind.indicators[indicator]
        if (!data) throw new Error('This function expects a argument as data input')
        const options = []
        let inputs = []

        for (let optionName of indicatorFunction.option_names) {
          if (data[optionName]) options.push(data[optionName])
        }

        if (indicatorFunction.options != options.length)
          throw new Error(`${indicatorFunction.name} expects ${indicatorFunction.option_names} to be required in options`)

        if (this.monkeyset.chain.selector == 'set') {
          throw new Error(`indicators don't work when fetching set data`)
        }

        for (let inputName of indicatorFunction.input_names) {
          let input = data[inputName]
          if (this.monkeyset.chain.selector == 'sets') {
            if (this.monkeyset.chain.dataformat != 'ohlc')
              throw new Error(`indicators only work on ohlc data format when fetching sets data, not on a ${this.monkeyset.chain.dataformat} one`)
            inputs = this.monkeyset.chain.sets[input]
          }
        }

        if (this.monkeyset.chain.selector == 'column') {
          if (this.monkeyset.chain.dataformat != 'native')
            throw new Error(`indicators only work on native data format when fetching column data, not on a ${this.monkeyset.chain.dataformat} one`)
          inputs = this.monkeyset.chain.sets
        }

        if (inputs.length == 0) throw new Error(`inputs is empty for ${indicatorFunction.name}`)
        const result = await indicatorFunction.indicator([inputs], options)

        const returnObject = {}
        for (let outputName of indicatorFunction.output_names) {
          returnObject[outputName] = result.splice(0, 1)[0]
        }

        return returnObject
      }

      this.monkeyset.chain[indicator] = this[indicator]
    }
  }
}

module.exports = Indicator
