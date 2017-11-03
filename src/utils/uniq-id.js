const times = (x) => (f) => {
  if (x > 0) {
    f()
    times(x - 1)(f)
  }
}

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

const uniqId = () => {
  let id = ''
  times(4)(() => { id = id + s4() })
  return id
}

export default uniqId
