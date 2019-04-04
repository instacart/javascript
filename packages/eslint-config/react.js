const merge = require('merge')

module.exports = {
  plugins: ['jsx-a11y', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: merge(require('./rules/react'), require('./rules/react-a11y')),
}
