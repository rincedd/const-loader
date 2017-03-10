const loader = require('../index');
const expect = require('unexpected');

describe('The const loader', function() {
  it('should return the value passed in the query string as a node module', function() {
    expect(loader.call({query: '?val=123'}), 'to equal', 'module.exports = "123";');
  });

  it('should return an empty string when no value is passed in the query string', function() {
    expect(loader.call({}), 'to equal', 'module.exports = "";');
  });
});