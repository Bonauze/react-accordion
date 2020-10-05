const path = require('path');

module.exports = (env, argv) => {
  const devtool = argv.mode === 'production' ? '' : 'source-map';

  return {
    entry: './src/index.jsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true,
      port: 1337,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    devtool,
  };
};
