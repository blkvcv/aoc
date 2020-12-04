const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const validatePassport = (fields) => requiredFields.every(field => fields.includes(field))

const countValidPassports = (raw) => {
  let valid = 0
  const passportsWithFieldsOnly = raw.map(passport => passport.map(data => data.split(':')[0]))
  passportsWithFieldsOnly.forEach(passportFields => {
    if (validatePassport(passportFields)) valid += 1
  })
  return valid
}

const fieldValueValidationMap = {
  byr: v => Number(v) >= 1920 && Number(v) <= 2002,
  iyr: v => Number(v) >= 2010 && Number(v) <= 2020,
  eyr: v => Number(v) >= 2020 && Number(v) <= 2030,
  hgt: v => {
    const parsed = v.split(/(\d*)(\w*)/)
      .filter(Boolean)
    const value = parsed[0]
    const unit = parsed[1]
    if (unit === 'cm') return value >= 150 && value <= 193
    if (unit === 'in') return value >= 59 && value <= 76
    return false
  },
  hcl: v => !!v.match(/^#[0-9a-f]{6}$/),
  ecl: v => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(v),
  pid: v => !!v.match(/^\d{9}$/),
  cid: v => true,
}

const createPassportMap = (raw) => raw.reduce((passport, field) => {
  const [fieldKey, fieldValue] = field.split(':')
  passport[fieldKey] = fieldValue
  return passport
}, {})

const validatePassportMap = (passport) => requiredFields.every(field => !!passport[field])

const countValidPassportsCheckValues = (rawPassports) => {
  let valid = 0
  const passports = rawPassports.map(data => createPassportMap(data))
  for (const passport of passports) {
    const validatedFields = {}
    for (const field of Object.keys(passport)) {
      const value = passport[field]
      validatedFields[field] = fieldValueValidationMap[field](value)
    }
    if (validatePassportMap(validatedFields)) valid += 1
  }

  return valid
}

module.exports = {
  countValidPassports,
  countValidPassportsCheckValues,
  validatePassportMap,
  fieldValueValidationMap,
}
