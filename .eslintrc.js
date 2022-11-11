module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  globals: {
    // LOOK_AT_ME:
    // accepts `context` global
    context: "readonly",
  },
  rules: {
    // LOOK_AT_ME:
    // can't use node module that's not supported by App Services Functions
    // even though valid node.js
    "no-restricted-modules": ["error", "v8"],
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
