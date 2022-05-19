const {
  baseRules,
  importConfig,
  reactConfig,
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
    es2021: true,
  },
  plugins: ['react', 'react-hooks', 'import', 'better-styled-components'],
  settings: {
    ...importConfig.settings,
    ...reactConfig.settings,
  },
  rules: {
    ...baseRules,
    ...importConfig.rules,
    ...reactConfig.rules,
    ...otherRules
  },
};
