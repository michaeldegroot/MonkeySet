const assert = require('assert')
const validate = require('validate')

class Operation extends require('./Component') {
  constructor(...args) {
    super(...args)
  }

  clear() {
    this.monkeyset.select = this.monkeyset.sets
  }

  delete(index = -1) {
    if (index === -1) {
      this.monkeyset.select = []
      this.monkeyset.sets = []
    }
  }

  add(...sets) {
    for (let set of sets) {
      assert.equal(set.length, this.monkeyset.keyLength, `add expected a length of ${this.monkeyset.keyLength}`)
      let i = 0
      const validation = {}
      for (let key in this.monkeyset.template) {
        const value = set[i]
        const type = this.monkeyset.template[key]
        // console.log(`${key} is a ${type} (${typeof value}) type with the value ${value}`)
        i++
      }
      this.monkeyset.sets.push(set)
    }

    return this
  }
}

module.exports = Operation
