import {isUndefined} from 'lodash';
import {set,debounce} from 'cerebral-addons';
import batchQueryAsyncAction from '../actions/batchQuery';
import alias from '../misc/alias';

const batchQuery = [
  set('state:/falcor.lastUpdated', (new Date()).getTime()),
  [
    batchQueryAsyncAction,
    {
      success: [
        ({input:{componentQueryResults} ,modules,state})=> {
          const falcorModule = modules[alias];
          const falcorState = state.select(falcorModule.path);

          componentQueryResults.forEach(({componentId,json})=> {
            const path = `queries.${componentId}.json`;
            const value = json || {};
            falcorState.set(path, value);
          });
        }
      ],
      error: [
        e=> {
          console.error(e);
          debugger;
        }
      ]
    }
  ]
];
export default batchQuery;