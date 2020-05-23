const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const electron = require('electron')
const { spawn } = require('child_process')

/**
 * @summary The Analyzer component analyses MonkeySet data
 * @memberof MonkeySet
 */
class Render extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)

    this.monkeyset.chain.chart = this.chart
  }

  /**
   * @summary Plots a MonkeySet to electron for viewing
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Views the sets
   * await monkeyset.fetch('sets').chart()
   */
  chart() {
    return new Promise(async (resolve, reject) => {
      const electron = require('electron')
      const proc = require('child_process')
      fs.writeFileSync(path.resolve(path.join(__dirname, '../', 'libs', 'electron'), 'data.json'), this.json())
      const child = proc.spawn(electron, [path.resolve(path.join(__dirname, '../', 'libs', 'electron'))], {
        stdio: 'inherit',
        windowsHide: false
      })
    })
  }
}

module.exports = Render
