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
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
    }],
  },
};
