const { baseRules, importEslintPlugin } = require('../rules');

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
  plugins: ['import'],
  settings: {
    ...importEslintPlugin.settings(),
  },
  rules: {
    ...baseRules,
    ...importEslintPlugin.rules,
  },
};
