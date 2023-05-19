# @foobarhq/eslint-config

Custom-built ESLint configuration designed for use in ESM, CJS, TypeScript, Vanilla JS, React & Node.

## Usage

- Install using `npm i -D @foobarhq/eslint-config` or `npm i -D @foobarhq/eslint-config-typescript`
- Create a `.eslintrc` file containing the following:
  ```json5
  {
    "extends": [
      // add this if you're using Vanilla JS.
      "@ephys/eslint-config",
      // or this if you're using TypeScript.
      // This one also supports vanilla JS files!
      "@ephys/eslint-config-typescript"
    ]
  }
  ```

## Presets

We have more than one preset available for our different environments. 
You can enable these variants by inheriting from more of our configuration presets.

The following presets files are available:

- `@foobarhq/eslint-config/browser`: Enable browser environment.
- `@foobarhq/eslint-config/react`: Turn on react-specific rules.
- `@foobarhq/eslint-config/node`: Enable node environment.
- `@foobarhq/eslint-config/jest`: Enable jest-specific rules.
- `@foobarhq/eslint-config/commonjs`: We assume ESM. Use this preset to require commonjs instead. 
  Note that you only need to this preset to treat `.js` files as CJS. `.cjs` files will already be treated as CJS.

Note: All of these presets are also available from `@foobarhq/eslint-config-typescript/<preset>`.

## Thanks

This repo is based on the work of @ephys [ephys/eslint-config](https://github.com/ephys/eslint-config)
