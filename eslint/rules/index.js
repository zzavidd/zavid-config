/**
 * The base rules available without plugins.
 * @type {import('eslint').Linter.RulesRecord}
 */
const baseRules = {
  'eol-last': [1, 'always'],
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
  'no-unreachable': 'warn',
  'no-unused-vars': 'off',
  'no-useless-escape': 'off',
  'require-await': 'warn',
  quotes: 'off',
  semi: ['error', 'always'],
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
 * @param isTypeScript True if TypeScript project.
 * @return {import('eslint').Linter.Config}
 */
const importEslintPlugin = (isTypeScript) => {
  const importResolverSettings = {
    node: {
      moduleDirectory: ['node_modules', '.'],
      extensions: ['.js', '.ts', '.tsx'],
    },
  };

  if (isTypeScript) {
    importResolverSettings.typescript = {};
  }
  
  return {
    settings: {
      'import/resolver': importResolverSettings,
      'import/ignore': ['.json', '.scss', '.ejs'],
    },
    rules: {
      'import/named': 0,
      'import/namespace': 0,
      'import/no-unresolved': ['error'],
      'import/order': [
        1,
        {
          groups: [
            'type',
            ['external', 'builtin'],
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroupsExcludedImportTypes: ['internal'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
    },
  };
};

/**
 * The rules allowed by the React plugin.
 * @type {import('eslint').Linter.Config}
 */
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

/**
 * The rules allowed by the TypeScript ESLint plugin.
 * @type {import('eslint').Linter.RulesRecord}
 */
const typesScriptEslintRules = {
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
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
};

module.exports = {
  baseRules,
  importEslintPlugin,
  reactRules,
  typesScriptEslintRules,
};
