'use strict';

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    mocha: true,
  },
  rules: {
    'quotes': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
    }],
  },
};
