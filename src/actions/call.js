var alias = require('../misc/alias');

function call(context) {
  var input = context.input;
  var output = context.output;
  var modules = context.modules;

  var falcor = input.falcor;
  var path = falcor.path;
  var args = input.args;
  var refSuffixes = input.refSuffixes || [];
  var thisPaths = input.thisPaths || [];
  var debug = input.debug || true;
  var verbose = input.verbose || true;

  if (!path || !args) = throw new Error('Invalid falcor inputs.');
  var arrayedArgs = Array.isArray(args) ? args : [args];
  var fullPath = Array.isArray(path) ? path : [path];

  modules[alias].services.call(
    fullPath,
    arrayedArgs,
    refSuffixes,
    thisPaths
  ).then(function (response) {
    if (!response) response = {json: {}};

    if (output.success) output.success(response.json);
    else output(response.json);
  })
  .catch(function (err) {
    if (verbose) console.error(err);
    if (debug) debugger;
    output.error(err);
  });

}

call.async = true;

module.exports = call;
