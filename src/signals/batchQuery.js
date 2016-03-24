var set = require('cerebral-addons/set');
var debounce = require('cerebral-addons/debounce');
var batchQueryAsyncAction = require('../actions/batchQuery');
var alias = require('../misc/alias');

var batchQuery = [
  set('state:/falcor.lastUpdated',(new Date()).getTime()),
  [
    batchQueryAsyncAction,
    {
      success: [
        function (context) {
          var input = context.input;
          var modules = context.modules;
          var state = context.state;

          var json = input.json;
          var optimizedQuery = input.optimizedQuery;
          var falcorModule = modules[alias];
          var falcorState = state.select(falcorModule.path);
          console.log(input);
          falcorState.merge({json: json,optimizedQuery: optimizedQuery});
        }
      ],
      error: [
        function (e) {
          console.error(e);
        }
      ]
    }
  ]
];

module.exports = batchQuery;
