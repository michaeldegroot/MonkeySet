const moment = require('moment')
const assert = require('assert')

class Validate {
  constructor() {
    this.data = {}
  }

  add(key, val, obj) {
    this.data[key] = {
      name: key,
      value: val,
      template: { ...obj }
    }
  }

  check() {
    const result = []
    for (let item in this.data) {
      this.typeValidation(this.data[item])
      result.push(this.customValidator(this.data[item]))
    }
    return result
  }

  customValidator(item) {
    for (let index in item.template.validators) {
      const validator = item.template.validators[index]
      if (validator === 'unix') {
        item.value = moment(item.value, item.template.format).unix()
      }
    }

    return item.value
  }

  typeValidation(item) {
    assert.equal(
      typeof item.value,
      item.template.type,
      `${item.name} is not a ${item.template.type} type, value given: ${item.value} (${typeof item.value})`
    )
  }
}

module.exports = Validate
