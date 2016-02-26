import falcorPathUtils from 'falcor-path-utils';
import alias from '../misc/alias';
import {get,values,flatten,map,forEach,isUndefined,first,omit} from 'lodash'

export default async function batchQuery({input,modules,state,output}) {
  try {
    const {verbose=false} = input;
    const falcorModule = modules[alias];
    const queriesState = state.select([...falcorModule.path, 'queries']);
    const queries = queriesState.get();

    const promises = map(queries, async (componentInfo, componentId)=> {
      const value = {componentId, json: {}};
      const {pathSets} = componentInfo;
      const falcorResults = await falcorModule.services.get(pathSets);

      if (falcorResults) {
        Object.assign(value, {json: falcorResults.json});
      }

      return value;
    });

    const componentQueryResults = await Promise.all(promises);
    output.success({componentQueryResults});
  }
  catch (e) {
    console.error(e);
    debugger;
    output.error(e);
  }
}