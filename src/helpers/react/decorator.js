import React from 'react';
import falcorPathSyntax from 'falcor-path-syntax';
import falcorPathUtils from 'falcor-path-utils';
import {isFunction,get,isEqual,isObject} from 'lodash';
import alias from '../../misc/alias';

export default function Decorator(decoratorProps) {
  return function (Component) {
    function generateId() {
      return `${Component.name || 'UNKNOWN'}_query_${Math.random().toString(36).slice(-8)}`;
    }

    return React.createClass({
      contextTypes: {
        controller: React.PropTypes.object
      },
      componentWillMount() {
        if(!this.props.signals || !this.props.modules){
          throw new Error('Falcor decorator must come after Cerebral decorator.');
        }

        const {controller} = this.context;
        controller.on('change', this.update);

        const isFunc = isFunction(decoratorProps);
        const queries = isFunc ? decoratorProps(this.props) : decoratorProps;

        if (!Array.isArray(queries)) {
          const errorMessage = [
            `Component '${Component.name}' use of Falcor decorator is invalid.`,
            `Must be passed an array of queries or a function producing such an array. Query ${JSON.stringify(decoratorProps, null, 2)}.`
          ].join('\n');
          throw new Error(errorMessage);
        }

        const guid = generateId();

        this.queryInfo = {guid,queries};
        const {registerQuery,batchQuery} = this.getFalcorSignals();
        registerQuery(this.queryInfo);
        batchQuery();

        const self = this;

        this.setState({
          falcorJSON:null,
          falcor(path, defaultValue){
            const json = self.state.falcorJSON;
            return !path ? json : get(self.state.falcorJSON, path, defaultValue);
          }
        });
      },
      componentWillUpdate(nextProps, nextState){
        const oldQueries = get(this, 'queryInfo.queries', null);
        const nextQueries = (isFunction(decoratorProps) ? decoratorProps(nextProps) : decoratorProps);

        if (!isEqual(oldQueries, nextQueries)) {
          const newQueryInfo = {
            guid: generateId(),
            queries: nextQueries
          };

          const {unregisterQuery, registerQuery,batchQuery} = this.getFalcorSignals();
          unregisterQuery({guid:this.queryInfo.guid});
          this.queryInfo = newQueryInfo;
          registerQuery(this.queryInfo);
          batchQuery();
        }
      },
      componentWillUnmount(){
        const {controller} = this.context;
        const guid = get(this, 'queryInfo.guid', null);

        if (guid) {
          const {unregisterQuery} = this.getFalcorSignals();
          unregisterQuery({guid});
          this.queryInfo = undefined;
        }
        controller.removeListener('change', this.update);
      },
      getFalcorSignals(){
        const {path} = this.context.controller.getModules()[alias];
        const signals = path.reduce((signal, key) => signal[key], this.props.signals);
        return signals;
      },
      update() {
        if (this.isMounted() && this.queryInfo) {
          const {guid} = this.queryInfo;
          const {controller} = this.context;
          const moduleName = controller.getModules()[alias].name;
          const info = controller.get([moduleName, 'queries', guid]);

          if (info && info.json) {
            if(!isEqual(this.state.falcorJSON,info.json)){
              this.setState({
                falcorJSON: info.json
              });
            }
          }
        }
      },
      render: function () {
        const propsToPass = Object.assign({}, this.props || {}, this.state || {});// Create a function that merges this.props and this.state (where you put whatever is grabbed from controller)
        return React.createElement(Component, propsToPass);
      }
    });
  }
}