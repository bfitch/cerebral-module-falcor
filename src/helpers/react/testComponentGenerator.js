var React = require('react');
var Component = React.Component;
var Cerebral = require('cerebral-view-react').Decorator;
var Decorator = require('./decorator');

/*
module.exports = function TestComponentGenerator(queries,subPath='') {

  @Cerebral()
  @Decorator(queries)
  class FalcorTester extends Component {
    render() {
      const {falcor} = this.props;
      const value = falcor(subPath);

      return (
        <div>
          <h5>{`Falcor <==> Cerebral subcache`}</h5>
          <h6>{subPath.length? `Subpath:${subPath}`:`Complete`}</h6>
          <pre>{JSON.stringify(value,null,2)}</pre>
        </div>
      );
    }
  }
  return FalcorTester;
}
*/
