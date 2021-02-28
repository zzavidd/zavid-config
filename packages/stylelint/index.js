module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'max-nesting-depth': 5,
    'selector-class-pattern': "^[a-z]+(?:-[a-z]+)*(?:__[a-z]*)?(?:--[a-z]*)?$",
    'selector-max-compound-selectors': 5,
    'selector-max-id': 1
  },
};