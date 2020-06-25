const MonkeySet = require('./monkeyset')

const monkeyset = new MonkeySet({
  time: {
    type: 'string',
    validators: ['unix'],
    format: 'YYYY-MM-DD'
  },
  open: {
    type: 'number'
  },
  high: {
    type: 'number'
  },
  low: {
    type: 'number'
  },
  close: {
    type: 'number'
  },
  volume: {
    type: 'number'
  }
})

monkeyset.add(['2017 - 12 - 1', 2, 3, 4, 5, 6], ['2017 - 12 - 2', 8, 9, 10, 11, 12], ['2017 - 12 - 3', 14, 15, 16, 17, 18])
console.log(monkeyset.select('sets').json())
