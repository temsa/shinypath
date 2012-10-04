var parser = require('./shinypath')


module.exports = function shinypath(expr, obj) {
  if(typeof obj === "undefined")
    return {it: it}
  
  function it(obj) {
    if(typeof obj !== "object")
      throw new TypeError("Expected an object as parameter, got a <"+ typeof obj +">.")
    return parser.parse(expr)(obj)
  }

  return it(obj)
}