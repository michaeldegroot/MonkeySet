const assert = require('assert')
const validate = require('validate')

class Selection extends require('./Component') {
  constructor(...args) {
    super(...args)
  }

  select(getType, ...args) {
    let selection

    assert.equal(this.monkeyset.select.length, 0, 'Expected the current selection to be empty, use .clear()')

    if (getType === 'sets') {
      selection = this.monkeyset.sets
    }

    if (getType === 'set') {
      assert.equal(args.length, 1, 'get expects 1 argument')
      assert.equal(typeof args[0], 'object', 'get expects 1 argument as object')
      const searchQuery = args[0]
      if (searchQuery.index) {
        selection = this.monkeyset.sets[searchQuery.index]
      }
      assert.notEqual(selection, undefined, `set index ${args[0]} is undefined`)
    }

    if (getType === 'column') {
      selection = []
      for (let item of this.bind(this.monkeyset.sets)) {
        selection.push(item[args[0]])
      }
    }

    assert.notEqual(selection, undefined, `${getType} is a invalid selector`)

    this.monkeyset.select = selection

    return this
  }
}

module.exports = Selection
