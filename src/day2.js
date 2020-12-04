const parse = raw => raw.map(line => line.split(' '))

const validatePasswordsBySum = (raw) => {
  // 1-2 m: mmpth #correct
  // 4-5 m: mmpth #wrong
  const passwords = parse(raw)
  const checked = passwords.map(password => {
    const [min, max] = password[0].split('-').map(v => Number(v))
    const char = password[1].split(':')
      .filter(Boolean)[0]
    const valueArr = password[2].split('')

    const occurrences = valueArr.filter(valueChar => valueChar === char).length
    return occurrences <= max && occurrences >= min
  })
    .filter(Boolean)

  return checked.length
}

const getAllIndexes = (arr, val) => {
  const indexes = []
  for(let i = 0; i < arr.length; i++)
    if (arr[i] === val)
      indexes.push(i);
  return indexes;
}

const validatePasswordsByPos = (raw) => {
  //1-2 a: abc
  //1-2 a: bac
  const passwords = parse(raw)
  const checked = passwords.map(password => {
    const [first, second] = password[0].split('-').map(v => Number(v))
    const char = password[1].split(':')
      .filter(Boolean)[0]
    const valueArr = password[2].split('')
    const indexes = getAllIndexes(valueArr, char)

    return (indexes.includes(first-1) && !indexes.includes(second-1)) || (indexes.includes(second-1) && !indexes.includes(first-1))
  }).filter(Boolean)

  return checked.length
}

module.exports = {
  validatePasswordsBySum,
  validatePasswordsByPos,
}
