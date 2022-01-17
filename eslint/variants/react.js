const { baseRules, importEslintPlugin, reactRules } = require('../rules');

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
  plugins: ['react', 'react-hooks', 'import'],
  settings: {
    ...importEslintPlugin.settings(),
    ...reactRules.settings,
  },
  rules: {
    ...baseRules,
    ...importEslintPlugin.rules,
    ...reactRules.rules,
  },
};
