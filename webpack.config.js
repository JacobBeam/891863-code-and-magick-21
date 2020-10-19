const { ModuleFilenameHelpers } = require("webpack");

const path = require("path");

module.exports = {
  entry: [
    "./js/backend.js",
    "./js/dialog.js",
    "./js/game.js",
    "./js/move.js",
    "./js/render.js",
    "./js/setup.js",
    "./js/stat.js",
    "./js/util.js",
    "./js/wizard.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
