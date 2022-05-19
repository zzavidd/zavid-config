const {
  baseRules,
  importConfig,
  reactConfig,
  typescriptRules,
  tsxRules,
  otherRules,
} = require('../rules');

module.exports = {
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
  },
  plugins: ['react', 'react-hooks', 'import', 'better-styled-components'],
  settings: {
    ...importConfig.settingsTypeScript,
    ...reactConfig.settings,
  },
  rules: {
    ...baseRules,
    ...importConfig.rules,
    ...reactConfig.rules,
    ...otherRules
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: typescriptRules,
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        ...typescriptRules,
        ...tsxRules,
      },
    },
  ],
};
