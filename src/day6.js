const { INPUT } = require('../input/day6')

const getUnionCount = (charSequence) => {
  const charArr = charSequence.split('')
  return new Set(charArr).size
}

const getSumOfAllAnswers = (allAnswersPerMan) => {
  const allAnswersPerGroup = allAnswersPerMan.map(line => line.split('\n').join(''))
  let sum = 0
  allAnswersPerGroup.forEach((answer) => {
    sum += getUnionCount(answer)
  })
  return sum
}

console.log(getSumOfAllAnswers(INPUT)) // 6633

const getIntersectionCount = (groupAnswers) => {
  const [first, ...others] = groupAnswers.map(answer => answer.split(''))
  const intersection = others.reduce((intersection, answer) => {
    return intersection.filter(question => answer.includes(question))
  }, first)
  return intersection.length
}

const getSumOfSameAnswers = (allAnswersPerMan) => {
  const allAnswersPerGroup = allAnswersPerMan.map(line => line.split('\n').filter(Boolean))
  let sum = 0
  allAnswersPerGroup.forEach((answer) => {
    sum += getIntersectionCount(answer)
  })
  return sum
}

console.log(getSumOfSameAnswers(INPUT)) // 3202
