class Manipulation extends require('./component') {
  constructor(...args) {
    super(...args)
  }

  bind(selection = this.monkeyset.select) {
    const data = []
    let i = 0
    for (let set of selection) {
      let push = {}
      // assert.equal(set.propertyIsEnumerable(), true, 'Unexpected result: selection sets are non iterable and thus incompatible')
      for (let value of set) {
        push[this.monkeyset.keys[i]] = value
        i++
      }
      data.push(push)
      i = 0
    }

    return data
  }

  map() {
    this.monkeyset.select = this.bind()

    return this
  }
}

module.exports = Manipulation
