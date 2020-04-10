const path = require('path');
const fs = require('fs');
const os = require('os');
//
const entries = JSON.parse(getEntries());
console.log (JSON.stringify(entries,null,4));

Object.keys(entries).forEach(
    key => (entries[key] = ['./source-map-install.js', entries[key]])
);

module.exports = {
  mode: 'production',
  // mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: entries,
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
                loader: 'ts-loader?configFile=tsconfig.webpack.json',
                options: {
                    transpileOnly: true
                }
}
    ],
  },
};

function getEntries ()
{
  let results = "{" + os.EOL;
  fs.readdirSync(__dirname + '/src/function').forEach((item) => {
    results += "\"./" + item.replace('.ts', '') + "\": \"./src/function/" + item + "\"," + os.EOL;
  });
  results = results.slice(0, -2) + os.EOL + "}";

  return results;
}
