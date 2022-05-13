const rules = require('../rules');

const SELECTOR_PATTERN =
  '^[a-z]+(?:-[a-z]+)*(?:__[a-z]+(?:-[a-z]+)*)?(?:--[a-z]+(?:-[a-z]+)*)?$';

/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    ...rules,
    'selector-class-pattern': SELECTOR_PATTERN,
  },
};
