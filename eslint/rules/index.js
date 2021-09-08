/** The base rules available without plugins. */
const baseRules = {
  'eol-last': [1, 'always'],
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
  'no-case-declarations': 'off',
  'no-useless-escape': 'off',
  quotes: 'off',
};

/** The rules allowed by the import plugin. */
const importEslintPlugin = {
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['.json', '.scss', '.ejs'],
  },
  rules: {
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': ['error'],
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling'],
        pathGroupsExcludedImportTypes: ['internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

/** The rules allowed by the React plugin. */
const reactRules = {
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'always', children: 'ignore' },
    ],
    'react/prop-types': 'off',
  },
};

/** The rules allowed by the TypeScript ESLint plugin. */
const typesScriptEslintRules = {
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
};

module.exports = {
  baseRules,
  importEslintPlugin,
  reactRules,
  typesScriptEslintRules,
};
