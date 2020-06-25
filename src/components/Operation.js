const assert = require('assert')
const Validate = require('../libs/validate')
const moment = require('moment')

class Operation extends require('./Component') {
  constructor(...args) {
    super(...args)
  }

  clear() {
    this.monkeyset.select = []

    return this
  }

  delete(index = -1) {
    if (index === -1) {
      this.monkeyset.select = []
      this.monkeyset.sets = []
    }

    return this
  }

  add(...sets) {
    for (let set of sets) {
      assert.equal(set.length, this.monkeyset.keyLength, `add expected a length of ${this.monkeyset.keyLength}`)
      let i = 0
      const validate = new Validate()
      for (let key in this.monkeyset.template) {
        validate.add(key, set[i], this.monkeyset.template[key])
        i++
      }
      this.monkeyset.sets.push(validate.check())
    }

    return this
  }
}

module.exports = Operation
