const moment = require('moment')
const chrono = require('chrono-node')
const _ = require('lodash')
const component = require('../classes/component')

/**
 * @summary For filtering data from a MonkeySet
 * @memberof MonkeySet
 */
class Filter extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)

    this.monkeyset.chain.first = this.first
    this.monkeyset.chain.last = this.last
    this.monkeyset.chain.sort = this.sort
    this.monkeyset.chain.result = this.result
    this.monkeyset.chain.between = this.between
    this.monkeyset.chain.convert = this.convert
  }

  /**
   * @summary Grabs sets from a specified date
   * @param {number} - Get sets from starting from this date
   * @param {number} - Get sets from ending with this date
   * @returns {object} MonkeySet class reference
   * @example
   * const monkeyset = new MonkeySet(
   *   [1557824898000, 4399, 4399, 4398, 4390, 48377],
   *   [1557738498000, 4390, 4386, 4393, 4392, 48374],
   *   [1557652098000, 4472, 4466.839069904292, 4473.785552755629, 4484, 48385]
   * )
   *
   * // Get only first 2 sets
   * console.log(monkeyset.fetch('sets').between('2 days ago', 'now').sets)
   * console.log(monkeyset.fetch('sets').between('3 days ago', '1 days ago').sets)
   * console.log(monkeyset.fetch('sets').between('2 minutes ago').sets)
   * console.log(monkeyset.fetch('sets').between('5-13-19').sets)
   */
  between(startDate, endDate = 'now') {
    const originalStart = startDate
    const originalEnd = endDate
    if (!startDate) throw new Error('between expects a first argument as startDate')

    const chronoStart = moment(chrono.parseDate(startDate))
    const chronoEnd = moment(chrono.parseDate(endDate))

    if (chronoStart.isValid()) {
      startDate = chronoStart
    } else {
      startDate = moment(startDate)
    }
    if (startDate.isValid() == false) {
      throw new Error(`Cannot understand ${originalStart} as startDate date format, try something else`)
    }

    if (chronoEnd.isValid()) {
      endDate = chronoEnd
    } else {
      endDate = moment(endDate)
    }
    if (endDate.isValid() == false) {
      throw new Error(`Cannot understand ${originalEnd} as endDate date format, try something else`)
    }

    this.sets = this.sets.filter(set => {
      const timestamp = moment(set[0])
      return timestamp.unix() <= endDate.unix() && timestamp.unix() >= startDate.unix()
    })

    return this
  }

  /**
   * @summary Grabs the last amount of sets of a MonkeySet
   * @param {number} - Amount to grab
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get only 2 last sets
   * const sets = monkeyset.fetch('sets').last(2).result()
   */
  last(amount = 1) {
    this.sets = this.sets.slice(Math.max(this.sets.length - amount, 1))
    return this
  }

  /**
   * @summary Grabs the first amount of sets of a MonkeySet
   * @param {number} - Amount to grab
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get only first 2 sets
   * const sets = monkeyset.fetch('sets').first(2).result()
   */
  first(amount = 1) {
    this.sets = this.sets.slice(0, amount)
    return this
  }

  /**
   * @summary Sorts a MonkeySet based on order and column specified
   * @param {string} - Order to sort by
   * @param {string} - Column to sort on
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get all sets and sort ascending on close price
   * const sets = monkeyset.fetch('sets').sort('ascending', 'close').result()
   */
  sort(order = 'ascending', column = 'time') {
    let columnIndex = false
    if (column == 'time') columnIndex = 0
    if (column == 'open') columnIndex = 1
    if (column == 'high') columnIndex = 2
    if (column == 'low') columnIndex = 3
    if (column == 'close') columnIndex = 4
    if (column == 'volume') columnIndex = 5
    if (columnIndex === false) throw new Error(`${column} is not a valid column to sort on`)
    this.sets = this.sets.sort((a, b) => {
      if (order == 'ascending') {
        return a[columnIndex] - b[columnIndex]
      } else {
        return b[columnIndex] - a[columnIndex]
      }
    })

    return this
  }

  /**
   * @summary Called at the end of a filter chain to retrieve the result
   * @returns {array[]} The filtered result of a MonkeySet
   *
   * TODO: would be cool if the filter chain could be
   * calculated here, so promises are easy to implement.
   * EDIT: Not possible BYE!!
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get all sets
   * const sets = monkeyset.fetch('sets').result()
   */
  result() {
    return this.sets
  }
}

module.exports = Filter
