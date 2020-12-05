const { INPUT } = require('../input/day5')

const binaryMap = {
  'F': '0',
  'B': '1',
  'L': '0',
  'R': '1',
}

const convertToBinary = (codedId) => {
  Object.keys(binaryMap)
    .forEach(key => {
      const re = new RegExp(key, 'g')
      codedId = codedId.replace(re, binaryMap[key])
    })
  return codedId
}

const getMaxSeatId = (codedSeatIds) => {
  const binaryIds = codedSeatIds.map(input => convertToBinary(input))
  binaryIds.sort()
  return parseInt(binaryIds[binaryIds.length-1], 2)
}

const convertToDecimal = (binary) => parseInt(binary, 2)

const findSeat = (codedSeatIds) => {
  const binaryIds = codedSeatIds.map(codedId => convertToBinary(codedId))
  const decimals = binaryIds.map(binary => convertToDecimal(binary))
  const sorted = decimals.sort((a,b) => a-b)

  let min = 0
  let max = decimals.length - 1
  while ((max - min) > 1) {
    const med = Math.floor((min + max) / 2)
    const medVal = sorted[med]
    if (sorted[min] + (med-min) === medVal) min = med
    else max = med
  }
  return sorted[min] + 1
}

const max = getMaxSeatId(INPUT) // 970
const seatId = findSeat(INPUT) // 587
console.log(max, seatId)

