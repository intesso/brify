var assert = require('assert');
var brify = require('./index');
var brified = brify('hello \n world');
assert.equal(brified, 'hello <br/> world');
console.log('test successful');