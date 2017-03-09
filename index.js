const path = require('path');

module.exports = function() {
  return 'module.exports = ' + JSON.stringify(this.query) + ';';
};