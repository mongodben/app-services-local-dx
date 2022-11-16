const moduleNotSupportedMessage =
  "You cannot use this module in an Atlas Function.";
const staticMethodNotSupportedMessage =
  "You cannot use this static method in an Atlas Function.";

module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  globals: {
    // LOOK_AT_ME:
    // accepts Atlas Functions custom globals
    context: "readonly",
    utils: "readonly",
    JSON: "readonly",
    EJSON: "readonly",
    BSON: "readonly",
  },
  rules: {
    // LOOK_AT_ME:
    // can't use node modules that're not supported by App Services Functions
    // even though valid node.js
    "no-restricted-modules": [
      "error",
      {
        paths: [
          {
            name: "child_process",
            message: moduleNotSupportedMessage,
          },
          {
            name: "error",
            message: moduleNotSupportedMessage,
          },
          {
            name: "domain",
            message: moduleNotSupportedMessage,
          },
          {
            name: "readline",
            message: moduleNotSupportedMessage,
          },
          {
            name: "v8",
            message: moduleNotSupportedMessage,
          },
          {
            name: "vm",
            message: moduleNotSupportedMessage,
          },
        ],
      },
    ],
    // TODO: only use supported JS syntax - https://www.mongodb.com/docs/atlas/app-services/functions/javascript-support/#fully-supported-modules
    // * disallowing RegExp -y and -u flags will require custom rule. can prob base on https://eslint.org/docs/latest/rules/require-unicode-regexp, which requires -u flag
    // TODO: only use supported built in objects - https://www.mongodb.com/docs/atlas/app-services/functions/javascript-support/#built-in-objects
    // This will be a very useful collection of rules for this - https://mysticatea.github.io/eslint-plugin-es/rules/
    // Must disallow the following:
    // * BigInt,
    // * Proxy
    // * Reflect
    // * WeakSet
    // TODO: only use built in methods and properties - https://www.mongodb.com/docs/atlas/app-services/functions/javascript-support/#built-in-methods---properties
    // Must disallow:
    // * Regex.prototype properties
    "no-restricted-properties": [
      "error",
      {
        object: "RegExp",
        property: "prototype",
        message: staticMethodNotSupportedMessage,
      },
    ],
    // * Array static methods
    // * Number static methods
    // * Math methods
    // TODO: document way to have ESLint config for Partially supported modules - https://www.mongodb.com/docs/atlas/app-services/functions/javascript-support/#partially-supported-modules
    //
    // These ESLint rule might be a helpful building blocks:
    // * https://eslint.org/docs/latest/rules/no-restricted-syntax
    // * https://eslint.org/docs/latest/rules/no-restricted-properties
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
