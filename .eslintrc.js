module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "react-app",
    "plugin:postcss-modules/recommended",
    // "plugin:css-modules/recommended",
  ],
  plugins: [
    "postcss-modules",
    // "css-modules",
    "prettier",
  ],
  rules: {},
  settings: {
    "postcss-modules": {
      postcssConfigDir: "cwd",
      baseDir: "cwd",
      camelCase: true,
      defaultScope: "local",
      include: /\.css$/,
      exclude: /\/node_modules\//,
    },
  },
};
