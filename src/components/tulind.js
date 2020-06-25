const tulind = require('tulind')

class Tulind extends require('./component') {
  constructor(...args) {
    super(...args)

    //Do a simple moving average on close prices with period of 3.
    // tulind.indicators.sma.indicator([close], [3], function(err, results) {
    //   console.log('Result of sma is:')
    //   console.log(results[0])
    // })
  }
}

module.exports = Tulind
