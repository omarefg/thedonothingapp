module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    'react',
    'flowtype',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  globals: {
    require: true,
    __DEV__: true,
    it: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
};
