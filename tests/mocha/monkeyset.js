const assert = require('assert')
const MonkeySet = require('../../monkeyset')

describe('MonkeySet', function() {
  it('Valid class structure', () => {
    const monkeyset = new MonkeySet({})
    assert('monkeyset' in monkeyset)
    assert('keys' in monkeyset.monkeyset)
    assert('template' in monkeyset.monkeyset)
    assert('keyLength' in monkeyset.monkeyset)
    assert('exports' in monkeyset.monkeyset)
  })
})
