# @instacart/eslint-plugin
[![NPM version][npm-image]][npm-url]

Instacart's shared ESLint configuration.

## Installation

```bash
$ yarn add --dev @instacart/eslint-config
```

## Usage

To use all of the eslint rules, simply extend the package (`@instacart/eslint-config`). This includes rules for TypeScript and integration with Prettier.

```js
// .eslintrc.js
module.exports = {
  extends: ['@instacart/eslint-config'],
}
```

The package allows for selective use by exposing the following configs to extend:

- `@instacart/eslint-config/core` (required) - core eslint rules for all projects
- `@instacart/eslint-config/react` - rules from  [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- `@instacart/eslint-config/typescript` - sets up overrides for `.ts`/`.tsx` files using the parser and rules from [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- `@instacart/eslint-config/prettier` - extends the prettier rule configurations to disable the appropriate eslint rules and adds the prettier plugin for integration with eslint [https://prettier.io/](https://prettier.io/)
