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
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import'],
  settings: {
    ...importEslintPlugin.settings,
    ...reactRules.settings,
  },
  rules: {
    ...baseRules,
    ...importEslintPlugin.rules,
    ...reactRules.rules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: typesScriptEslintRules
    },
  ],
};
