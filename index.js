const utils = require('loader-utils');

module.exports = function() {
  const opts = utils.getOptions(this) || {val: ''};
  return 'module.exports = ' + JSON.stringify(opts.val) + ';';
};