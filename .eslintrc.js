module.exports = {
  extends: ['@instacart/eslint-config'],
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.js', '*.spec.tsx', '**/test/**'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
}
