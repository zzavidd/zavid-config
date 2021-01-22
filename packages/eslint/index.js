module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:mocha/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'filenames', 'import', 'mocha', '@typescript-eslint'],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['.json', '.scss', '.ejs'],
    react: {
      version: 'detect',
    },
  },
  rules: {
    'filenames/match-regex': ['error', '^\\_?([a-z0-9]+[-|\\.]?)+$', true],
    'import/no-unresolved': ['error'],
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', 'sibling'],
        pathGroups: [
          {
            pattern: 'components/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'constants/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'styles/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    semi: ['error', 'always'],
    'spaced-comment': [
      'warn',
      'always',
      {
        exceptions: ['*'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'mocha/handle-done-callback': 'off',
    'mocha/no-top-level-hooks': 'off',
    'mocha/no-hooks-for-single-case': 'off',
    'no-case-declarations': 'off',
    'no-useless-escape': 'off',
    quotes: 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};
