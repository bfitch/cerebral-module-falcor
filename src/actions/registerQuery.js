var falcorPathSyntax = require('falcor-path-syntax');
var generateQueryPath = require('../misc/utils').generateQueryPath;
var alias = require('../misc/alias');

function registerQuery(context){
  var input = context.input;
  var state = context.state;
  var modules = context.modules;

  var guid = input.guid;
  var queries = input.queries;

  if (!Array.isArray(queries)) {
    throw new Error('input.queries must be an array of falcor query strings.');
  }

  var convertedToPathSets = queries.map(falcorPathSyntax.fromPath);
  var falcorModule = modules[alias];
  var queriesState = state.select(falcorModule.path.concat('queries'));
  queriesState.set(guid, convertedToPathSets);
}

module.exports = registerQuery;
