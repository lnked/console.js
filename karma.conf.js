module.exports = function (config) {
  config.set({
    basePath: ``,
    frameworks: [`mocha`, `chai`],
    files: [
      `build/js/**/*.js`,
      `node_modules/babel-polyfill/browser.js`,
      // `node_modules/babel-polyfill/dist/polyfill.js`,
    ],
    browsers: [`ChromeHeadless`],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: `ChromeHeadless`,
        flags: [`--no-sandbox`]
      }
    }
  });
};