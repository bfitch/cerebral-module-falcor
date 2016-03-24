var falcor = require('falcor');
var HTTPDataSource = require('falcor-http-datasource');

module.exports = {
  initializeServices: function (module, options) {
    var initialState = options.initialState;
    var dataSource = options.dataSource;
    var disableTimeout = options.disableTimeout;

    var falcorModel = new falcor.Model({
      cache: initialState,
      source: new HTTPDataSource(dataSource, disableTimeout ? {timeout: 0} : {}),
      onChange: module.getSignals().batchQuery
    });

    var falcorServices = {
      get: function get(query) {
        // Falcor's model get api doesn't match the docs.
        // Its not an Array.<PathSet> but actually (pathSet1,pathSet2,pathSetN)
        // this total makes sense or not, als;kdfjfas ldfkjasoeifju saleknmncl
        return falcorModel.get.apply(falcorModel, query);
      },

      set: function(jsonGraph) {
        return falcorModel.set(jsonGraph);
      },

      call: function (functionPath, args = [], refSuffixes = [], thisPaths = []) {
        // functionPath - {Path}            the path to the function to invoke
        // args         - {Array.<Object>}  the arguments to pass to the function
        // refSuffixes  - {Array.<PathSet>} paths to retrieve from the targets of JSONGraph References in the function's response.
        // thisPaths    - {Array.<PathSet>} paths to retrieve from function's this object after successful function execution
        args = args || [];
        refSuffixes = refSuffixes || [];
        thisPaths = thisPaths || [];
        return falcorModel.call(functionPath, args, refSuffixes, thisPaths);
      },

      getLocal(query){
        return falcorModel.getCache.apply(falcorModel, query);
      },

      setLocal(jsonGraph){
        var model = falcorModel.setCache(jsonGraph);
        return model;
      }
    };

    return {falcorModel: falcorModel, falcorServices: falcorServices};
  }
}
