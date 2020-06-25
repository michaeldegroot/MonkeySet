class Component {
  constructor(monkeyset) {
    this.monkeyset = monkeyset

    for (let func of Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(this.__proto__))) {
      if (func === 'monkeyset') continue
      if (func === 'constructor') continue
      this.exports = [this[func]]
    }
  }

  set exports(exports) {
    for (let item of exports) {
      if (this.monkeyset.exports[item.name]) {
        throw new Error(`${item.name} is already a exported monkeyset function!`)
      }
      this.monkeyset.exports[item.name] = item
    }
  }
}

module.exports = Component
