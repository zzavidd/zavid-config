const { selectorRegex } = require('./constants');

module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'max-nesting-depth': 5,
    'selector-class-pattern': selectorRegex,
    'selector-max-compound-selectors': 5,
    'selector-max-id': 1,
    'selector-no-qualifying-type': [
      true,
      { ignore: ['attribute', 'class', 'id'] },
    ],
  },
};
