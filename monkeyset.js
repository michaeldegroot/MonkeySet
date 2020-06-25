const assert = require('assert')
const fs = require('fs')

class MonkeySet {
  constructor(template) {
    this.setTemplate(template)
    this.loadComponents()

    return this.exports
  }

  setTemplate(template) {
    assert.notEqual(typeof template, 'undefined', 'expected a template object variable in the constructor for this MonkeySet')
    assert.equal(typeof template, 'object', `expected object for template variable but got ${typeof template}`)
    this.keys = []
    for (let key in template) {
      this.keys.push(key)
    }
    this.template = template
    this.keyLength = this.keys.length
    this.exports = {}
    this.sets = []
    this.select = []
    this.exports.monkeyset = this
    return this.exports
  }

  loadComponents(...components) {
    this.components = {}
    for (let file of fs.readdirSync('src/components')) {
      file = file.slice(0, -3)
      if (file == 'component') continue
      const classFile = require(`./src/components/${file}`)
      const classComponent = new classFile(this)
      this.components[file] = classComponent
      assert.notEqual(classComponent.monkeyset, undefined, `${file} is not extended from a monkeyset component`)
    }
  }
}

module.exports = MonkeySet
