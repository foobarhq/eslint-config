module.exports = {
  plugins: ['import-newlines', 'import', 'small-import'],
  rules: {
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],

    'import-newlines/enforce': [
      'error',
      {
        items: Number.POSITIVE_INFINITY,
        'max-len': 125,
        semi: true,
      },
    ],

    // not ready for node 12's 'exports' yet.
    // 'import/no-unresolved': 2,
    // too slow
    'import/named': 0,
    // some libraries use typings to declare themselves as ES Modules even though they are not
    'import/default': 'off',
    'import/no-absolute-path': 2,
    'import/no-useless-path-segments': [2, {
      // we support native ESM which requires specifying the actual path (or using package.json)
      noUselessIndex: false,
    }],
    // Too slow
    // 'import/no-self-import': 2,

    'import/export': 2,
    // too slow
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,

    // too slow
    'import/no-deprecated': 0,
    'import/no-extraneous-dependencies': [2, {
      peerDependencies: true,
    }],

    'import/no-anonymous-default-export': ['error', {
      allowArray: true,
      allowObject: true,
      allowLiteral: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
    }],

    'import/no-commonjs': 2,
    'import/no-amd': 2,

    'import/first': 2,
    'import/no-namespace': 0,

    // disabled because .ts files must be imported using .js
    // https://github.com/import-js/eslint-plugin-import/issues/2170
    // ideally replace with https://github.com/import-js/eslint-plugin-import/issues/2319
    // 'import/extensions': ['error', 'ignorePackages'],

    'import/no-duplicates': 2,
    'import/newline-after-import': 2,
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
    }],

    'import/no-dynamic-require': 0,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,

    'no-import-assign': 2,

    'small-import/no-full-import': ['error', {
      packages: {
        lodash: '/',
        'date-fns': '/',
        rambda: '/src/',
        '@mui/material': '/',
        '@mui/icons-material': '/',
        '@material-ui/core': '/',
        '@material-ui/icons': '/',
      },
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.mts',
          '.cts',
          '.d.ts',
        ],
      },
    },
  },
};
