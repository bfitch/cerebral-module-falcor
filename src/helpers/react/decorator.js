var React = require('react');
var falcorPathSyntax = require('falcor-path-syntax');
var falcorPathUtils = require('falcor-path-utils');
var _ = require('lodash');
var uuid = require('uuid').v4;
var alias = require('../../misc/alias');

function Decorator(decoratorProps) {
  return function (Component) {
    return React.createClass({
      contextTypes: {
        controller: React.PropTypes.object
      },
      componentWillMount() {
        var controller = this.context.controller;
        controller.on('change', this.update);

        var isArr = Array.isArray(decoratorProps);
        var isFunc = _.isFunction(decoratorProps);

        if (!isArr && !isFunc) {
          throw new Error('Falcor decorator must be passed an array of queries or a function producing such an array. Query ' + JSON.stringify(decoratorProps, null, 2) + '.');
        }

        var guid = uuid();
        var queries = (isFunc ? decoratorProps(this.props) : decoratorProps).sort();
        var queryInfo = {guid: guid, queries: queries};

        var falcorSignals = this.getFalcorSignals();
        var registerQuery = falcorSignals.registerQuery;
        var batchQuery = falcorSignals.batchQuery;
        registerQuery(queryInfo);
        batchQuery();

        this.queryInfo = queryInfo;
        this.setState({
          falcor: function (jsonPath, defaultValue) {
            jsonPath = jsonPath || '';
            return defaultValue
          },
          queryInfo: queryInfo
        });
      },
      componentWillUpdate(nextProps, nextState){
        var oldQueries = _.get(this, 'queryInfo.queries', null);
        var nextQueries = (_.isFunction(decoratorProps) ? decoratorProps(nextProps) : decoratorProps).sort();

        if (!_.isEqual(oldQueries, nextQueries)) {
          var newQueryInfo = {
            guid: uuid(),
            queries: nextQueries
          };

          var replaceQueries = this.getFalcorSignals().replaceQueries;

          replaceQueries({
            oldGuid: this.queryInfo.guid,
            nextQueryInfo: newQueryInfo
          });

          this.queryInfo = newQueryInfo;
        }
      },
      componentWillUnmount(){
        var controller = this.context.controller;
        var guid = _.get(this, 'queryInfo.guid', null);

        if (guid) {
          var unregisterQuery = this.getFalcorSignals().unregisterQuery;
          unregisterQuery({guid: guid});
          this.queryInfo = undefined;
        }
        controller.removeListener('change', this.update);
      },
      getFalcorSignals() {
        var path = this.context.controller.getModules()[alias].path;
        var signals = path.reduce((signal, key) => signal[key], this.props.signals);
        return signals;
      },
      update() {
        if (this.isMounted()) {
          var controller = this.context.controller;
          var moduleName = controller.getModules()[alias].name;
          // Check if the state you are looking for has changed and
          var json = controller.get([moduleName, 'json']);

          this.setState({
            falcor: function (jsonPath, defaultValue) {
              jsonPath = jsonPath || '';
              if (!jsonPath.length) return json;
              return _.get(json || {}, jsonPath, defaultValue);
            }
          });
        }
      },
      render: function () {
        var props = this.props;
        var state = this.state;
        var propsToPass = Object.keys(props).reduce(function (propsCopy, key) {
          propsCopy[key] = props[key];
          return propsCopy;
        }, {});
        var stateAndPropsToPass = Object.keys(state).reduce(function (stateAndPropsToCopy, key) {
          stateAndPropsToCopy[key] = state[key];
          return stateAndPropsToCopy;
        }, propsToPass);
        return React.createElement(Component, stateAndPropsToPass);
      }
    });
  }
}

module.exports = Decorator;
