import {isObject,mapValues} from 'lodash';
import falcorPathSyntax from 'falcor-path-syntax';
import falcorPathUtils from 'falcor-path-utils';
import {generateQueryPath} from '../misc/utils';
import alias from '../misc/alias';

export default function registerQuery({input,state,modules}){
  const {guid,queries,defaults} = input;

  if (!Array.isArray(queries)) {
    throw new Error(`input.queries must be an key/value of falcor query strings.`);
  }

  const falcorModule = modules[alias];
  const queriesState = state.select([...falcorModule.path,'queries']);

  //const convertedToPathSets = queries.map(falcorPathSyntax.fromPath);
  //const collapsedPathSets =  falcorPathUtils.collapse(convertedToPathSets);

  //queriesState.set(guid,{pathSets:collapsedPathSets,json:{}});
  queriesState.set(guid,{pathSets:queries,json:{}});
}