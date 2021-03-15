const memoize = require("lodash/memoize");
function test() {
  return 1;
}

module.exports = memoize(test);
