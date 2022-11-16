# Atlas Functions Local DX Improvements

This project is a prototype showing how you can use ESLint and TypeScript to
enhance the developer experience of using Atlas Functions.

How it works:

- Uses ESLint to add App Services custom global modules and enforce runtime constraints
- Uses TypeScript to provide type-ahead for App Services global variables

**Note**: This was only tested with my VSCode set up, with my plugins. Not sure how it'd work in other editors.
I assume it'll work with most other JavaScript developers' setups, but should be tested out.

## Usage

1. Clone this repo `git clone https://github.com/mongodben/app-services-local-dx.git`
1. Open project in VSCode
1. In the `example` directory, run `npm install`
1. Go to file `example/app-services-function-example.js`
1. You should see ESLint applying rules and VSCode Intellisense working

## Files

- `atlas-function-types` - TypeScript config package, specifying that runs on standard JS files
- `example/.eslintrc.js` - ESLint config, specifying custom globals and runtime rules
  - Note: this should be made an ESLint plugin at some point
- `example/jsconfig.json` - Configuring the JavaScript to use the TypeScript types
- `example/package.json` - Project config importing TS rules from `atlas-function-types`

All these files are annotated with comments showing what's going on.

You can find all relevant code by searching for comments beginning with `LOOK_AT_ME:`.

## Potential Next Steps

1. Extend ESLint config to cover whole App Services runtime
1. bundle ESLint config in a [shareable config](https://eslint.org/docs/latest/developer-guide/shareable-configs)
1. Do all the TypeScript typing
1. ~create a shareable tsconfig && move to `jsconfig.json` file (i need to validate how jsconfig.json works...learned [this is a thing](https://code.visualstudio.com/docs/languages/jsconfig#_using-webpack-aliases) today)~
1. look at how to elegantly publish and add to project
