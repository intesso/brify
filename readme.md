# brify

replaces `\n` with `<br/>` in a string



# usage
use in the browser with browserify.

```js
var brify = require('brify');
var brified = brify('hello \n world');
assert.equal(brified, 'hello <br/> world');

```

# license
MIT
