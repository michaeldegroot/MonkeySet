const component = require('../classes/component')
const moment = require('moment')
const chrono = require('chrono-node')

/**
 * @summary For doing operations on data from a MonkeySet
 * @memberof MonkeySet
 */
class Operation extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)
  }

  /**
   * @summary Adds OHLC data to the MonkeySet
   * @param {array[]} - A set or a array of sets
   * @fires MonkeySet#add
   * @example
   * // One add
   * monkeyset.Operation.add([1,2,3,4,5,6])
   *
   * // Multiple adds
   * monkeyset.Operation.add(
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   * )
   */
  add(...newSet) {
    this.monkeyset.sets.push(...newSet)
    /** @event MonkeySet#add */
    this.monkeyset.event.emit('add')
  }

  /**
   * This overrides the MonkeySet to ensure only valid data is present in the sets
   * @summary Makes sure a MonkeySet contains only valid data
   * @param {array[]} - A set or a array of sets
   * @fires MonkeySet#add
   * @example
   * // Add sets, but some of these are invalid!
   * monkeyset.Operation.add(
   *   [1557824898000, 4399, 4399, 4398, 4390, 48377], // should be added
   *   ['5/13/2019, 11:08:18', 4390, 4386, 4393, 4392, 48374],  // should be added and converted to unix timestamp
   *   [1557652098000, 4472, 4466.839069904292, 4473.785552755629, 4484, 48385],  // should be added
   *   [1557612098000, 4472, 'abc', 4473.785552755629, 4484, 48385], // should be skipped due to 'abc'
   *   ['yeet', 4472, 4466.839069904292, 4473.785552755629, 4484, 48385] // should be skipped due to 'yeet'
   *   [1557824898000, 48377], // should be skipped due to parameter length mismatch
   * )
   *
   * // At this point the MonkeySet still contains invalid data, to make it valid:
   *
   * monkeyset.Operation.validate()
   * // Now the whole MonkeySet only contains valid data
   */
  validate() {
    for (let i = 0; i < this.monkeyset.sets.length; i++) {
      const set = this.monkeyset.sets[i]
      const chronoDate = chrono.parseDate(String(set[0]))
      if (chronoDate != null) {
        set[0] = moment(chronoDate).unix()
      } else {
        if (typeof set[0] == 'number') {
          if (moment(set[0]).isValid()) {
            // [0] = moment(set[0]).unix()
          }
        }
      }

      set[1] = parseFloat(set[1])
      set[2] = parseFloat(set[2])
      set[3] = parseFloat(set[3])
      set[4] = parseFloat(set[4])
      set[5] = parseFloat(set[5])
    }

    this.monkeyset.sets = this.monkeyset.sets.filter(set => {
      let includeInSet = true

      if (isNaN(set[0])) includeInSet = false
      if (isNaN(set[1])) includeInSet = false
      if (isNaN(set[2])) includeInSet = false
      if (isNaN(set[3])) includeInSet = false
      if (isNaN(set[4])) includeInSet = false
      if (isNaN(set[5])) includeInSet = false

      return includeInSet
    })
  }

  /**
   * @summary clears a MonkeySet object, destroying all data.
   * @fires MonkeySet#clear
   * @example
   * monkeyset.Operation.clear()
   */
  clear() {
    this.monkeyset.chain.sets = []
    this.monkeyset.sets = []
    this.monkeyset.index = 0
    /** @event MonkeySet#clear */
    this.monkeyset.event.emit('clear')
  }
}

module.exports = Operation
