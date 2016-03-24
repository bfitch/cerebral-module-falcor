var batchQuery = require('./batchQuery');
var call = require('./call');
var registerQuery = require('./registerQuery');
var unregisterQuery = require('./unregisterQuery');
var replaceQueries = require('./replaceQueries');

module.exports = {
  batchQuery: batchQuery,
  call: call,
  registerQuery: registerQuery,
  unregisterQuery: unregisterQuery,
  replaceQueries: replaceQueries
};
