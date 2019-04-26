// View link below for typescript rules documentation
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
module.exports = {
  // Require that member overloads be consecutive
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Requires using either T[] or Array<T> for arrays
  '@typescript-eslint/array-type': 'off',

  // Enforces that types will not be used
  '@typescript-eslint/ban-types': 'error',

  // Bans “// @ts-ignore” comments from being used
  '@typescript-eslint/ban-ts-ignore': 'error',

  // Enforce camelCase naming convention
  '@typescript-eslint/camelcase': 'error',

  // Require PascalCased class and interface names
  '@typescript-eslint/class-name-casing': 'error',

  // Require explicit return types on functions and class methods
  '@typescript-eslint/explicit-function-return-type': 'off',

  // Require explicit accessibility modifiers on class properties and methods
  '@typescript-eslint/explicit-member-accessibility': 'off',

  // Enforces naming of generic type variables
  '@typescript-eslint/generic-type-naming': 'off',

  // Enforce consistent indentation
  '@typescript-eslint/indent': ['error', 2],

  // Require that interface names be prefixed with I
  '@typescript-eslint/interface-name-prefix': 'off',

  // Require a specific member delimiter style for interfaces and type literals
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      delimiter: 'semi',
    },
  ],

  // Enforces naming conventions for class members by visibility.
  '@typescript-eslint/member-naming': 'off',

  // Require a consistent member declaration order
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'constructor',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
    },
  ],

  // Enforces the use of as Type assertions instead of <Type> assertions
  '@typescript-eslint/no-angle-bracket-type-assertion': 'error',

  // Disallow generic Array constructors
  '@typescript-eslint/no-array-constructor': 'error',

  // Disallow the declaration of empty interfaces
  '@typescript-eslint/no-empty-interface': 'off',

  // Disallow usage of the any type
  '@typescript-eslint/no-explicit-any': 'error',

  // Forbids the use of classes as namespaces
  '@typescript-eslint/no-extraneous-class': 'error',

  // Disallow iterating over an array with a for-in loop
  '@typescript-eslint/no-for-in-array': 'off',

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
  '@typescript-eslint/no-inferrable-types': 'error',

  // Enforce valid definition of new and constructor.
  '@typescript-eslint/no-misused-new': 'off',

  // Disallow the use of custom TypeScript modules and namespaces
  '@typescript-eslint/no-namespace': 'error',

  // Disallows non-null assertions using the ! postfix operator
  '@typescript-eslint/no-non-null-assertion': 'error',

  // Forbids an object literal to appear in a type assertion expression
  '@typescript-eslint/no-object-literal-type-assertion': 'error',

  // Disallow the use of parameter properties in class constructors.
  '@typescript-eslint/no-parameter-properties': 'error',

  // Disallows invocation of require()
  '@typescript-eslint/no-require-imports': 'off',

  // Disallow aliasing this
  '@typescript-eslint/no-this-alias': 'off',

  // Disallow /// <reference path="" /> comments
  '@typescript-eslint/no-triple-slash-reference': 'error',

  // Disallow the use of type aliases
  '@typescript-eslint/no-type-alias': 'off',

  // Warns when a namespace qualifier is unnecessary
  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  // Warns if a type assertion does not change the type of an expression
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',

  // Disallow unused variables
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],

  // Disallow the use of variables before they are defined
  '@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],

  // Disallow unnecessary constructors
  '@typescript-eslint/no-useless-constructor': 'off',

  // Disallows the use of require statements except in import statements
  '@typescript-eslint/no-var-requires': 'error',

  // Use function types instead of interfaces with call signatures
  '@typescript-eslint/prefer-function-type': 'off',

  // Prefer an interface declaration over a type literal
  '@typescript-eslint/prefer-interface': 'off',

  // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules.
  '@typescript-eslint/prefer-namespace-keyword': 'off',

  // Requires any function or method that returns a Promise to be marked async.
  '@typescript-eslint/promise-function-async': 'off',

  // When adding two variables, operands must both be of type number or of type string.
  '@typescript-eslint/restrict-plus-operands': 'off',

  // Require consistent spacing around type annotations
  '@typescript-eslint/type-annotation-spacing': 'error',

  // Warns for any two overloads that could be unified into one.
  '@typescript-eslint/unified-signatures': 'off',
}
