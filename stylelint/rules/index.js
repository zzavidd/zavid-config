/**
 * @type {import('stylelint').ConfigRules}
 */
module.exports = {
  'function-parentheses-space-inside': 'never-single-line',
  'max-nesting-depth': 5,
  'selector-max-compound-selectors': 5,
  'selector-max-id': 1,
  'selector-no-qualifying-type': [
    true,
    { ignore: ['attribute', 'class', 'id'] },
  ],
};
