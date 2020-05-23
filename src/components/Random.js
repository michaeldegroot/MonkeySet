const component = require('../classes/component')
const _ = require('lodash')

/**
 * @summary For creating random data in a MonkeySet
 * @memberof MonkeySet
 */
class Random extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)
  }

  /**
   * Completely fills specified amount of sets in a MonkeySet with random fake OHLC data
   * @summary Fills a MonkeySet with fake data
   * @param {number} - Amount of sets to create randomly
   * @returns {object} MonkeySet
   * @example
   * const monkeyset = new MonkeySet()
   * monkeyset.Random.setsFill(200)
   */
  setsFill(amount) {
    const startDate = new Date()
    const baseVolume = _.random(1000, 100000)
    const basePrice = _.random(5, 9000)
    let price = basePrice
    let volume = baseVolume

    for (let i = 0; i < amount; i++) {
      const intensity = _.random(19, 999) + _.random(19, 999)
      price += _.random(-intensity, intensity)

      if (price <= 0) {
        price = 2
      }
      const closeModifier = _.random(-intensity, intensity)

      const open = price
      const close = price + closeModifier
      const high = open + _.random(5, intensity)
      const low = open - _.random(5, intensity)

      volume = _.random(100, 100000)
      price = close

      this.monkeyset.Operation.add([startDate.setDate(startDate.getDate() + 1), open, high, low, close, volume])
    }

    return this.monkeyset
  }
}

module.exports = Random
