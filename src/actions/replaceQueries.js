var without = require('lodash').without;
var falcorPathSyntax = require('falcor-path-syntax');

var generateQueryPath = require('../misc/utils').generateQueryPath;
var alias = require('../misc/alias');

function replaceQueries(context) {
  var input = context.input;
  var state = context.state;
  var modules = context.modules;

  var falcorModule = modules[alias];
  var queriesState = state.select(falcorModule.path.concat('queries'));
  var oldGuid = input.oldGuid;
  var nextQueryInfo = input.nextQueryInfo;

  queriesState.unset(oldGuid);
  var convertedToPathSets = nextQueryInfo.queries.map(falcorPathSyntax.fromPath);
  queriesState.set(nextQueryInfo.guid,convertedToPathSets);
}

module.exports = replaceQueries;
