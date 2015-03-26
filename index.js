module.exports = function brify (text) {
  return text.replace(/\n/g, '<br/>');
};