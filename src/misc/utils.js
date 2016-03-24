var falcorPathSyntax = require('falcor-path-syntax');

module.exports = {
  generateQueryPath: function (query){
    var pathSet = falcorPathSyntax.fromPath(query);
    var queryString = JSON.stringify(pathSet);
    var queryPath = ['queries', queryString];
    return queryPath;
  }
}
