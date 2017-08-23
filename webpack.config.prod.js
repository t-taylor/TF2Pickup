const path = require('path');
const webpack = require('webpack');
const merge = require('lodash.merge');
const common = require('./webpack.common');
const BabiliPlugin = require('babili-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].[chunkhash].js',
  },

  plugins: common.plugins.concat([
    // Launch the analyzer when we set the env variable 'analyze' to 'true'
    process.env.analyze ? new BundleAnalyzerPlugin() : () => {},
    // Babel minify plugin
    new BabiliPlugin({}, { comments: false }),
    // Set the node_env to production
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),

    // Extract the node modules into it's own chunk
    // as they don't change as often as code so they can be cached
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        if (module.resource && (/\.js$/).test(module.resource)) {
          return module.context && module.context.indexOf('node_modules') >= 0;
        }

        return false;
      },
    }),

    // Extract the webpack bootstrap logic into it's own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity,
    }),
    new webpack.NamedModulesPlugin(),

    // Create gzipped versions of html, js and svg files
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|svg)$/,
      threshold: 0,
      minRatio: 0.9,
    }),
  ]),
});