const { baseRules, importConfig } = require('../rules');

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

  settings: importConfig.settings,
  rules: {
    ...baseRules,
    ...importConfig.rules,
  },
};
