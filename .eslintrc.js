require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: './packages/eslint-config',
  rules: {
    'import/no-commonjs': 0,
  },
};
