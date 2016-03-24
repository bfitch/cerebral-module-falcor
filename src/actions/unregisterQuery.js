var _ = require('lodash');
var generateQueryPath = require('../misc/utils').generateQueryPath;
var alias = require('../misc/alias');

function unregisterQuery(context) {
  var input = context.input;
  var modules = context.modules;
  var state = context.state;

  var guid = input.guid;
  var falcorModule = modules[alias];
  var queriesState = state.select(falcorModule.path.concat('queries'));
  queriesState.unset(guid);
}

module.exports = unregisterQuery;
