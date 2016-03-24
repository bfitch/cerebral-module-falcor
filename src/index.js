var alias = require('./misc/alias');
var warning = require('./misc/warning');
var signals = require('./signals');
var services = require('./services');
var Decorator = require('./helpers/react/decorator');

var moduleExport = function (options) {
  options = options || {};
  return function (module, controller) {
    module.alias(alias);

    module.addState({
      lastUpdated: (new Date()).getTime(),
      json: {},
      queries: {}
    });

    module.addSignals({
      batchQuery: signals.batchQuery,
      call: signals.call,
      registerQuery: signals.registerQuery,
      unregisterQuery: signals.unregisterQuery,
      replaceQueries: signals.replaceQueries
    });

    var fullOptions = Object.keys(options).reduce(function (fullOptions, key) {
      fullOptions[key] = options[key];
      return fullOptions;
    }, {
      initialState: {},
      dataSource: '/model.json',
      verbose: true,
      disableTimeout: true
    });

    var initializedServices = services.initializeServices(module, fullOptions);
    module.addServices(initializedServices.falcorServices);

    var meta = {
      warning: warning,
      falcorModel: initializedServices.falcorModel
    };
    return meta;
  }
}

moduleExport.Decorator = Decorator;

module.exports = moduleExport;
