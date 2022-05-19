/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: '@zzavidd/eslint-config/react-ts',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['**/tsconfig.json'],
  },
};
