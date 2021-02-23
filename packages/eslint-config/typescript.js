const merge = require('merge')

module.exports = {
  plugins: ['jsx-a11y', 'react', '@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
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
        'no-shadow': 'off',
      }),
    },
  ],
}
