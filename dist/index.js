import ' lodash/memoize?commonjs-require';
import memoize from ' lodash/memoize?commonjs-proxy';

function test() {
  return 1;
}

var rollupTest = memoize(test);

export default rollupTest;
