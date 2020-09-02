const {
  override,
  enableEslintTypescript,
  disableEsLint,
  addPostcssPlugins,
  addWebpackPlugin,
} = require("customize-cra");
const { TypedCssModulesPlugin } = require("typed-css-modules-webpack-plugin");

module.exports = override(
  enableEslintTypescript(),
  disableEsLint(),

  addWebpackPlugin(
    new TypedCssModulesPlugin({
      globPattern: "src/**/*.css",
      camelCase: true,
    })
  ),
  addPostcssPlugins([
    require("postcss-mixins"),
    require("postcss-nested"),
    require("postcss-preset-env")({ stage: 2 }),
    require("autoprefixer")({ flexbox: "no-2009" }),
  ])
);
