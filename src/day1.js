const findSumOfTwo = (values, sum) => {
  const diffMap = {}
  for (let i = 0; i < values.length; i++) {
    const value = values[i]
    const diff = sum - value
    if (diffMap[diff]) {
      return [value, diff]
    }
    diffMap[value] = diff
  }
}

const findSumOfThree = (values, sum) => {
  const sorted = values.sort()
  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i]
    for (let j = 0; j < i; j++) {
      const b = sorted[j]
      const c = sum - a - b
      if (sorted.includes(c)) {
        return [a, b, c]
      }
    }
  }
}

module.exports = {
  findSumOfTwo,
  findSumOfThree,
}
