const {
  baseRules,
  importEslintPlugin,
  typesScriptEslintRules,
} = require('../rules');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    ...importEslintPlugin.settings,
  },
  rules: {
    ...baseRules,
    ...importEslintPlugin.rules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: typesScriptEslintRules,
    },
  ],
};
