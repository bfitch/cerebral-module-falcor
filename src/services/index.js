import falcor from 'falcor';
import HTTPDataSource from 'falcor-http-datasource';

export function initializeServices(module, options) {
  const {initialState, dataSource, disableTimeout, batchMs} = options;

  const falcorModel = new falcor.Model({
    cache: initialState,
    source: new HTTPDataSource(dataSource, disableTimeout ? {timeout: 0} : {}),
    onChange: module.getSignals().batchQuery
  });

  const model = batchMs ? falcorModel.batch(batchMs) : falcorModel;

  const falcorServices = {
    async get(pathSets) {
      // Falcor's model get api doesn't match the docs.
      // Its not an Array.<PathSet> but actually (pathSet1,pathSet2,pathSetN)
      // this total makes sense or not, als;kdfjfas ldfkjasoeifju saleknmncl
      const results = await model.get(...pathSets);
      return results;
    },

    set(jsonGraph){
      return model.set(jsonGraph);
    },

    call(functionPath, args = [], refSuffixes = [], thisPaths = []) {
      // functionPath - {Path}            the path to the function to invoke
      // args         - {Array.<Object>}  the arguments to pass to the function
      // refSuffixes  - {Array.<PathSet>} paths to retrieve from the targets of JSONGraph References in the function's response.
      // thisPaths    - {Array.<PathSet>} paths to retrieve from function's this object after successful function execution
      return model.call(functionPath, args, refSuffixes, thisPaths);
    },

    invalidate(paths){
      return model.invalidate(...paths);
    }
  };

  return {falcorModel, falcorServices};
}