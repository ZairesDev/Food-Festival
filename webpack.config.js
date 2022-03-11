const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './assets/js/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  mode: 'development',
};

//* ATTEMPT TO RECREATE THE SAME CODE FROM ABOVE WITH ES6 SYNTAX
// import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// console.log('dist', __dirname);

// export const entry = './assets/js/script';
// export const output = {
//   path: path.resolve(__dirname, 'dist'),
//   filename: 'main.bundle',
// };
// export const mode = 'development';
