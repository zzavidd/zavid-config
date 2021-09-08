const {
  baseRules,
  importEslintPlugin,
  reactRules,
  typesScriptEslintRules,
} = require('./rules');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'import', '@typescript-eslint'],
  settings: {
    ...importEslintPlugin.settings,
    ...reactRules.settings,
  },
  rules: {
    ...baseRules,
    ...importEslintPlugin.rules,
    ...typesScriptEslintRules,
    ...reactRules.rules,
  },
};
