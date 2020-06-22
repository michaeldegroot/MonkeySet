const path = require('path')
const fs = require('fs')
const events = require('events')

class MonkeySet {
  /**
   * A MonkeySet is a class object that holds OHLC data (a set) in the most important form which is:
   *  - MonkeySet.time: (int) The time in UNIX time stamp when this candle was created
   *  - MonkeySet.open: (float) Opening price
   *  - MonkeySet.high: (float) Highest price
   *  - MonkeySet.low: (float) Lowest price
   *  - MonkeySet.close: (float) Closing price
   *  - MonkeySet.volume: (float) Volume
   *
   * @example
   * const MonkeySet = require('monkeyset')
   * // Create only one set
   * const monkeyset = new MonkeySet([1,2,3,4,5,6])
   *
   * // Or create a monkeyset with more sets
   * const monkeyset = new MonkeySet(
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   * )
   *
   * @author GiveMeAllYourCats <specamps@gmail.com>
   * @summary Represents a MonkeySet containing sets.
   * @param {array[]} sets - Initial sets to add to the MonkeySet
   * @constructor
   * @class MonkeySet
   */

  constructor(...initialSets) {
    this.projectRoot = path.resolve(path.dirname(__dirname))
    this.sets = {}
    this.index = 0
    this.event = new events.EventEmitter()
    this.loadComponents()
    this.Operation.clear()

    if (initialSets.length >= 1) {
      this.Operation.add(...initialSets)
    }
  }

  /**
   * @summary Starts/resets the filter chain which stores the array to work with for the chain methods
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get all sets
   * const sets = monkeyset.fetch('sets').result()
   *
   * // Get a set by index
   * const sets = monkeyset.fetch('set', 420).result()
   *
   * // Get all column values from a sets
   * const sets = monkeyset.fetch('column', 'open').result()
   */
  fetch(selector, ...args) {
    this.chain.sets = []
    this.chain.selector = selector
    this.chain.extraData = {}
    this.chain.dataformat = 'native'

    // Given sets are: [[1,2,3,4,5,6], [7,8,9,10,11,12]]
    if (selector == 'sets') {
      // Sets: [[1,2,3,4,5,6], [7,8,9,10,11,12]]
      this.chain.sets = this.sets
    } else if (selector == 'set') {
      if (args.length != 1) throw new Error(`you need to specify 1 argument for the ${selector} selector`)
      // set: [[1,2,3,4,5,6]]
      this.chain.sets = [this.sets[args[0]]]
    } else if (selector == 'column') {
      // Column: [[1], [7]]
      if (args.length != 1) throw new Error(`you need to specify 1 argument for the ${selector} selector`)
      let columnSelector = false
      // TODO: multiple column selects?
      if (args[0] == 'time') columnSelector = 0
      if (args[0] == 'open') columnSelector = 1
      if (args[0] == 'high') columnSelector = 2
      if (args[0] == 'low') columnSelector = 3
      if (args[0] == 'close') columnSelector = 4
      if (args[0] == 'volume') columnSelector = 5
      const columns = ['time', 'open', 'high', 'low', 'close', 'volume']
      this.chain.columnSelector = columns[columnSelector]
      if (columnSelector === false) throw new Error(`${args[0]} is not a valid column`)

      // TODO: This function is very slow, can it be optimized?
      // EDIT: NOOOOOOOOOPEEEEEEEEE
      this.chain.sets = this.sets.map(set => {
        return set[columnSelector]
      })
    } else {
      throw new Error(`${selector} is not a valid selector for select`)
    }

    return this.chain
  }

  /**
   * @summary Loads all the core or extended components
   * @ignore
   */
  loadComponents() {
    // Setup the the chain that will be used across components to work with
    this.chain = {}
    this.chain.sets = []
    this.marketchain = {}

    // Read component files
    const files = fs.readdirSync(path.join(this.projectRoot, 'src', 'components')).filter(item => {
      return item.slice(-3, item.length) == '.js'
    })

    // Load components
    for (let file of files) {
      const module = require(path.join(this.projectRoot, 'src', 'components', file))
      this[module.name] = new module(this)
    }
  }
}

module.exports = MonkeySet
