const asTable = require('as-table')
const assert = require('assert')

class Render extends require('./Component') {
  constructor(...args) {
    super(...args)
  }

  json() {
    const returnVal = JSON.stringify(this.monkeyset.select)
    this.clear()
    return returnVal
  }

  table() {
    const returnVal = this.bind()
    this.clear()
    return asTable(returnVal)
  }
}

module.exports = Render
