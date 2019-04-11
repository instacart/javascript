export function foo(arg1)
export function foo(arg1, arg2)
export function foo(...args) {
  if (args.length === 2) {
    return 'foo'
  }

  if (args.length === 1) {
    return 'bar'
  }
}
