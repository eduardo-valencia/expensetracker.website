const reduceList = expectedType => (list = null, { type, payload = [] }) =>
  type === expectedType ? payload : list

export default reduceList
