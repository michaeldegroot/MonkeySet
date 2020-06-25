const MonkeySet = require('./monkeyset')

const monkeyset = new MonkeySet({
  time: 'unix',
  open: 'float',
  high: 'float',
  low: 'float',
  close: 'float',
  volume: 'int'
})

monkeyset.add([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18])
console.log(
  monkeyset
    .select('column', 'high')
    .select('sets')
    .json()
)
