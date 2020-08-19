export const mockMeFunction = () => {
  console.log('foo')
  const ZeroOrOne = Math.round(Math.random())
  const isOdd = ZeroOrOne % 2
  return isOdd
}
