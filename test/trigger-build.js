/* global describe, it */

var triggerBuild = require('../lib/trigger-build')

require('chai').should()

describe('trigger-build', function () {
  it('has a test that we can run', function () {
    triggerBuild()
    true.should.equal(true)
  })
})
