module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    library: 'cerebralModuleFalcor',
    libraryTarget: 'commonjs2',
    filename: 'dist/index.js'
  },
  externals: {
    falcor: 'falcor',
    react: 'react'
  },
  resolve: {
    alias: { falcor: "falcor/dist/falcor.browser.js" },
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: require.resolve("uuid/rng-browser.js"),
        loader: "imports?global=>window"
      }
    ]
  }
};
