const anotherThing = 'foo'

export const foo = something => {
  if (!something) {
    return null
  }

  return something + anotherThing
}
