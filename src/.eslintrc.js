'use strict';

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
  },
};
