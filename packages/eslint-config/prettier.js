const typescriptEslintPrettier = require('eslint-config-prettier/@typescript-eslint')

module.exports = {
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended', 'prettier', 'prettier/react'],
  rules: require('./rules/prettier'),
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      // Can't add extends[] to an overrides config
      // https://github.com/eslint/eslint/issues/8813
      rules: typescriptEslintPrettier.rules,
    },
  ],
}
