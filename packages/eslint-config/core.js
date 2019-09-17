const merge = require('merge')

module.exports = {
  env: {
    node: true,
    es6: true,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json'],
      },
    },
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/extensions': ['.js', '.jsx'],
  },

  rules: merge(
    require('./rules/best-practices'),
    require('./rules/errors'),
    require('./rules/node'),
    require('./rules/style'),
    require('./rules/variables'),
    require('./rules/es6'),
    require('./rules/imports'),
    require('./rules/strict')
  ),
}
