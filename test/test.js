/*global describe: true, after: true, before: true, it: true*/
var mocha         = require('mocha')
  , should        = require('should')
  , shinypath     = require('../lib')

describe('When using a simple subfield "foo"', function () {
  var expr = "foo"
  var obj  = {foo:"hello, world"}
  var getTo

  it('should throw no error when parsing', function () {
    getTo = shinypath(expr)
  })
  it('should throw no error evaluating a valid object', function () {
    getTo.it.bind(getTo, obj).should.not.throw()
  })
  it('should also return the good value for this object', function () {
    getTo.it(obj).should.equal("hello, world")
  })
})

describe('When using a 2 step expression "foo.bar"', function () {
  var expr = "foo.bar"
  var obj  = {foo:{bar:"hello, world"}}
  var getTo

  it('should throw no error when parsing', function () {
    getTo = shinypath(expr)
  })
  it('should throw no error evaluating a valid object', function () {
    getTo.it.bind(getTo, obj).should.not.throw()
  })
  it('should also return the good value for this object', function () {
    getTo.it(obj).should.equal("hello, world")
  })
})

describe('When using a 2 step expression "foo[\'bar\']"', function () {
  var expr = "foo['bar']"
  var obj  = {foo:{bar:"hello, world"}}
  var getTo

  it('should throw no error when parsing', function () {
    getTo = shinypath(expr)
  })
  it('should throw no error evaluating a valid object', function () {
    getTo.it.bind(getTo, obj).should.not.throw()
  })
  it('should also return the good value for this object', function () {
    getTo.it(obj).should.equal("hello, world")
  })
})

describe('When using a 2 step expression with an array "foo[0]"', function () {
  var expr = "foo[0]"
  var obj  = {foo:["hello, world"]}
  var getTo

  it('should throw no error when parsing', function () {
    getTo = shinypath(expr)
  })
  it('should throw no error evaluating a valid object', function () {
    getTo.it.bind(getTo, obj).should.not.throw()
  })
  it('should also return the good value for this object', function () {
    getTo.it(obj).should.equal("hello, world")
  })
})