# @instacart/tsconfig
[![NPM version][npm-image]][npm-url]

Instacart's shared TypeScript configuration

## Installation

```bash
$ yarn add --dev @instacart/tsconfig
```

## Usage

By default the package provides 2 configurations to extend from.

- `@instacart/tsconfig` - The base configuration.

- `@instacart/tsconfig/babel` is used for our builds that use TypeScript in conjunction with Babel for the build process and defaults to `esnext` for the ECMAScript target version and module generation. It also preserves `jsx` for babel to take care of.

```json
// tsconfig.json
{
  "extends": "@instacart/tsconfig/babel",
  "compilerOptions": {
    "rootDir": "./",
    ...
  }
}
```
