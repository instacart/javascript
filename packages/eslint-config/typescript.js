const merge = require('merge')

module.exports = {
  plugins: ['jsx-a11y', 'react'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        'import/parsers': {
          'babel-eslint': ['.js'],
        },
        'import/resolver': {
          typescript: {},
        },
      },
      rules: merge(require('./rules/typescript'), {
        // Already supported by TS
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        'no-use-before-define': 'off',

        // other
        'no-redeclare': 'off',

        // allow TS files to not have prop types defined
        'react/prop-types': [
          'error',
          {
            skipUndeclared: true,
          },
        ],

        // reports errors for exported functions with overload signatures
        // https://github.com/typescript-eslint/typescript-eslint/issues/10
        'import/export': 'off',

        // issue with generic args in JSX
        'react/jsx-props-no-multi-spaces': 'off',

        // disable the base rule as it can report incorrect errors
        camelcase: 'off',
        indent: 'off',
      }),
    },
  ],
}
