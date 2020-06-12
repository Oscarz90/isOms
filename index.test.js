/* eslint-disable no-undef */
var isOms = require('./index')

describe('Testing isOms', function () {
  it('should return true passing oms', function () {
    expect(isOms('oms')).toBeTruthy()
  })

  it('should return true passing smo', function () {
    expect(isOms('smo')).toBeFalsy()
  })
})
