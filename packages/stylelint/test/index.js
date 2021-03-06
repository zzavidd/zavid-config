const assert = require('assert');
const { selectorRegex } = require('../constants');

const REGEX = new RegExp(selectorRegex);

describe('Stylelint Tests', function () {
  it('Test selector regex', function () {
    check(true, 'block');
    check(true, 'block__elem');
    check(true, 'block__elem-ext');
    check(true, 'block__elem--mod');
    check(true, 'block__elem--mod-ext');
    
    check(false, 'block__');
    check(false, 'block__elem__');
    check(false, 'block__elem__elem');
    check(false, 'block__elem--');
    check(false, 'block__elem--mod-');
    check(false, 'block__elem--mod--');
    check(false, 'block__elem--mod--mod');
  });
});

/**
 * Verify that a selector matches the regex.
 * @param {boolean} shouldPass True if expected to pass.
 * @param {string} selector The selector name.
 */
function check(shouldPass, selector) {
  assert.strictEqual(
    REGEX.test(selector),
    shouldPass,
    `Testing "${selector}" did not produce a ${shouldPass} value.`
  );
}
