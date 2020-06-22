const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const ccxt = require('ccxt')

/**
 * @summary For gathering market data
 * @memberof MonkeySet
 */
class Market extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)
  }

  /**
   * @summary Selects a market
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get all sets in json data format
   * const json = monkeyset.fetch('sets').json()
   */
  market(data) {
    if (!data.exchange) {
      throw new Error('exchange argument is not defined')
    }
    if (!data.args) {
      data.args = {}
    }
    try {
      this.monkeyset.ccxt = new ccxt[data.exchange](data.args)
    } catch (e) {
      throw new Error(`${data.exchange} is invalid and threw a error: ${e.toString()}`)
    }

    this.monkeyset.marketchain = { ...this.monkeyset.marketchain, ccxt: this.monkeyset.ccxt }

    return this.monkeyset.marketchain
  }
}

module.exports = Market
