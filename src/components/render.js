const asTable = require('as-table')
const assert = require('assert')

class Render extends require('./Component') {
  constructor(...args) {
    super(...args)
  }

  json() {
    return JSON.stringify(this.monkeyset.select)
  }

  table() {
    return asTable(this.bind())
  }
}

module.exports = Render
