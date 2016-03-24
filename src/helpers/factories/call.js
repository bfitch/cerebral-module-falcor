var set = require('cerebral-addons/set');
var falcorCallSignal = require('../../signals/call');

module.exports = function callFactory(path, args){
  return [
    set('output:/falcor.path',path),
    set('output:/falcor.args',args),
    falcorCallSignal
  ]
}
