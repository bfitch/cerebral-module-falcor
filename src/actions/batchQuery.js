var falcorPathUtils = require('falcor-path-utils');
var alias = require('../misc/alias');
var _ = require('lodash');

function batchQuery(context){
  var input = context.input;
  var modules = context.modules;
  var state = context.state;
  var output = context.output;

  var verbose = input.verbose || false;
  var falcorModule = modules[alias];
  var queriesState = state.select(falcorModule.path.concat('queries'));
  var allQueries = _.flatten(_.values(queriesState.get()));
  var optimizedQuery = falcorPathUtils.collapse(allQueries);

  if (optimizedQuery.length) {
    if (verbose) console.log('Falcor combined query: ' + JSON.stringify(optimizedQuery));
    falcorModule.services.get(optimizedQuery)
      .then(function (results) {
        var json = _.get(results, 'json', null);
        output.success({json,optimizedQuery});
      })
      .catch(function (err) {
        output.error(err);
      });
  }
}

batchQuery.async = true;

module.exports = batchQuery;
