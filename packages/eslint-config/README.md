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

- `@instacart/eslint-config/core` (required)
- `@instacart/eslint-config/react`
- `@instacart/eslint-config/typescript`
- `@instacart/eslint-config/prettier`
