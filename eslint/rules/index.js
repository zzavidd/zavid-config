const memberOrdering = require('./member-ordering');

/**
 * The base rules available without plugins.
 * @type {import('eslint').Linter.RulesRecord}
 */
exports.baseRules = {
  'constructor-super': 'error',
  'eol-last': [1, 'always'],
  'no-await-in-loop': 'error',
  'no-case-declarations': 'off',
  'no-console': [
    'warn',
    {
      allow: ['dir', 'warn', 'error', 'info', 'time', 'timeEnd'],
    },
  ],
  'no-multiple-empty-lines': [
    'warn',
    {
      max: 1,
    },
  ],
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-return-await': 'warn',
  'no-unreachable': 'warn',
  'no-unused-vars': 'off',
  'no-useless-escape': 'off',
  'require-await': 'warn',
  'quotes': 'off',
  'semi': ['error', 'always'],
  'spaced-comment': [
    'warn',
    'always',
    {
      exceptions: ['*'],
    },
  ],
};

/**
 * The rules allowed by the import plugin.
 */
exports.importConfig = {
  settings: {
    'import/ignore': ['.json', '.scss', '.ejs'],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
        extensions: ['.js'],
      },
    },
  },
  settingsTypeScript: {
    'import/ignore': ['.json', '.scss', '.ejs'],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
        extensions: ['.js', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  rules: {
    'import/named': 0,
    'import/namespace': 0,
    'import/no-unresolved': ['error'],
    'import/order': [
      1,
      {
        'groups': [
          ['external', 'builtin'],
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'pathGroupsExcludedImportTypes': ['internal'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'warnOnUnassignedImports': true,
      },
    ],
  },
};

/**
 * The rules allowed by the React plugin.
 * @type {import('eslint').Linter.Config}
 */
exports.reactConfig = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/function-component-definition': 'warn',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'always', children: 'ignore' },
    ],
    'react/jsx-fragments': ['warn', 'element'],
    'react/no-unused-state': 'warn',
    'react/prop-types': 'off',
  },
};

/**
 * The rules for TS files.
 * @type {import('eslint').Linter.RulesRecord}
 */

/**
 * @type {import('@typescript-eslint/eslint-plugin')}
 */
exports.typescriptRules = {
  '@typescript-eslint/await-thenable': 'warn',
  '@typescript-eslint/consistent-type-definitions': 'warn',
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  '@typescript-eslint/consistent-type-imports': 'warn',
  '@typescript-eslint/explicit-function-return-type': [
    'warn',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true,
      allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': [
    'warn',
    {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
      },
    },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-ordering': [
    'warn',
    {
      default: memberOrdering,
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreIIFE: true,
    },
  ],
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
};

/**
 * The rules for TSX files.
 * @type {import('eslint').Linter.RulesRecord}
 */
exports.tsxRules = {
  '@typescript-eslint/explicit-function-return-type': 'off',
};

/**
 * Miscellaneous rules.
 * @type {import('eslint').Linter.RulesRecord}
 */
exports.otherRules = {
  'better-styled-components/sort-declarations-alphabetically': 'warn',
};
