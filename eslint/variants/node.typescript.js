const {
  baseRules,
  typescriptRules,
  importConfig,
} = require('../rules');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    node: true,
    es2021: true,
  },
  plugins: ['import'],
  settings: {
    ...importConfig.settingsTypeScript,
  },
  rules: {
    ...baseRules,
    ...importConfig.rules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: typescriptRules,
    },
  ],
};
