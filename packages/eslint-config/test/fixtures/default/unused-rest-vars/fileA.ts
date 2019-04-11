export function foo(props) {
  const { thing, ...rest } = props

  return rest
}
