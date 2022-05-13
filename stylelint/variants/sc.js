const rules = require('../rules');

/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-styled-components',
  ],
  rules,
};
