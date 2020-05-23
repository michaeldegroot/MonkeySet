const component = require('../classes/component')
const fs = require('fs')
const path = require('path')

/**
 * @summary For converting a MonkeySet to specific data formats
 * @memberof MonkeySet
 */
class Converter extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)

    this.monkeyset.chain.ohlc = this.ohlc
    this.monkeyset.chain.json = this.json
  }

  /**
   * @summary Converts a MonkeySet to JSON
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get all sets in json data format
   * const json = monkeyset.fetch('sets').json()
   */
  json() {
    return JSON.stringify(this.sets)
  }

  /**
   * @summary Converts a MonkeySet to OHLC format
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get all sets in ohlc data format
   * const ohlc = monkeyset.fetch('sets').ohlc().result()
   */
  ohlc() {
    if (this.selector == 'column' && this.dataformat) throw new Error(`Cannot convert ${this.dataformat} format to ohlc in a ${this.selector} fetch`)

    this.dataformat = 'ohlc'
    this.sets = {
      time: this.sets.map(set => {
        return set[0]
      }),
      open: this.sets.map(set => {
        return set[1]
      }),
      high: this.sets.map(set => {
        return set[2]
      }),
      low: this.sets.map(set => {
        return set[3]
      }),
      close: this.sets.map(set => {
        return set[4]
      }),
      volume: this.sets.map(set => {
        return set[5]
      })
    }

    return this
  }
}

module.exports = Converter
