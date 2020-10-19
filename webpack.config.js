const path = require("path");

module.exports = {
  entry: [

    "./js/util.js",
    "./js/wizard.js",
    "./js/setup.js",
    "./js/render.js",
    "./js/dialog.js",
    "./js/move.js",
    "./js/stat.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
