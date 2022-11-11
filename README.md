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
1. Go to file `app-services-function-example.js`
1. You should see ESLint applying rules and VSCode Intellisense working

## Files

- `tsconfig.js` - TypeScript config, specifying that runs on standard JS files
- `app-services-globals.d.ts` - TypeScript definitions for global variables.
  used by `tsconfig.js` and applied to ``app-services-function-example.js`.
- `.eslintrc.js` - ESLint config, specifying custom globals and runtime rules
- `app-services-function-example.js` - example function file showing ESLlint working

All these files are annotated with comments showing what's going on.

You can find all relevant code by searching for comments beginning with `LOOK_AT_ME:`.
