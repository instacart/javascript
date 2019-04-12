module.exports = {
  root: true,
  extends: ['@instacart/eslint-config'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
