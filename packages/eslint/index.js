module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
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
  plugins: ['react', 'import', '@typescript-eslint'],
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
    "import/named": 0,
    "import/namespace": 0,
    'import/no-unresolved': ['error'],
    "import/order": [
      1,
      {
        "groups": ["external", "builtin", "internal", "sibling"],
        "pathGroupsExcludedImportTypes": ["internal"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
      },
    ],
    'no-unreachable': 'warn',
    'no-unused-vars': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'time', 'timeEnd'],
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
    "@typescript-eslint/no-explicit-any": 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-case-declarations': 'off',
    'no-useless-escape': 'off',
    quotes: 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};
