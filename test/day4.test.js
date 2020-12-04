const assert = require('assert')

const { INPUT, TEST1, TEST2_VALID, TEST2_INVALID } = require('../input/day4')
const { countValidPassports, countValidPassportsCheckValues, fieldValueValidationMap, validatePassportMap } = require('../src/day4')

describe('day4.js', function () {
  const formatInput = input => input.map(v => v.split(' ').filter(Boolean))

  describe('count passports with valid fields', function () {
    it('should match the puzzle test', function () {
      const input = formatInput(TEST1)
      const valid = countValidPassports(input)
      assert.strictEqual(valid, 2)
    })
    it('should solve the puzzle', function () {
      const input = formatInput(INPUT)
      const valid = countValidPassports(input)
      assert.strictEqual(valid, 222)
    })
  })

  describe('count passports that passed value validation', function () {
    it('should match the puzzle test (all valid)', function () {
      const input = formatInput(TEST2_VALID)
      const valid = countValidPassportsCheckValues(input, true)
      assert.strictEqual(valid, 4)
    })
    it('should match the puzzle test (all invalid)', function () {
      const input = formatInput(TEST2_INVALID)
      const valid = countValidPassportsCheckValues(input, true)
      assert.strictEqual(valid, 0)
    })
    it('should solve the puzzle', function () {
      const input = formatInput(INPUT)
      const valid = countValidPassportsCheckValues(input, true)
      assert.strictEqual(valid, 140)
    })
  })

  describe('unit validation test', function () {
    it('shouldn`t pass the "byr" validation', function () {
      // four digits; at least 1920 and at most 2002
      const incorrectValues = [
        'aaaa',
        '1919',
        '2003',
        '0200',
        '1',
      ]
      incorrectValues.forEach(value =>
        assert.strictEqual(fieldValueValidationMap['byr'](value), false)
      )
    })
    it('should pass the "byr" validation', function () {
      // four digits; at least 1920 and at most 2002
      const correctValues = [
        '1920',
        '2002',
        '2000',
        '1980',
      ]
      correctValues.forEach(value =>
        assert.strictEqual(fieldValueValidationMap['byr'](value), true)
      )
    })
    it('shouldn`t pass the "iyr" validation', function () {
      // four digits; at least 2010 and at most 2020
      const incorrectValues = [
        '2009',
        'aaa',
        '0000',
        '2021',
      ]
      incorrectValues.forEach(value =>
        assert.strictEqual(fieldValueValidationMap['iyr'](value), false)
      )
    })
    it('should pass the "iyr" validation', function () {
      // four digits; at least 2010 and at most 2020
      const correctValues = [
        '2010',
        '2011',
        '2020',
        '2019',
      ]
      correctValues.forEach(value =>
        assert.strictEqual(fieldValueValidationMap['iyr'](value), true)
      )
    })
    it('should pass the "hgt" validation', function () {
      // a number followed by either cm or in:
      // - If cm, the number must be at least 150 and at most 193.
      // - If in, the number must be at least 59 and at most 76.
      const correctValues = [
        '180cm',
        '59in',
        '60in',
        '193cm',
      ]
      correctValues.forEach(value =>
        assert.strictEqual(fieldValueValidationMap['hgt'](value), true)
      )
    })
    it('shouldn`n pass the "hgt" validation', function () {
      // a number followed by either cm or in:
      // - If cm, the number must be at least 150 and at most 193.
      // - If in, the number must be at least 59 and at most 76.
      const correctValues = [
        '180',
        '590in',
        '60inc',
        '193cm2',
      ]
      correctValues.forEach(value =>
        assert.strictEqual(fieldValueValidationMap['hgt'](value), false)
      )
    })
    it('shouldn`t pass the passport validation', function () {
      const passport = {
        byr: true,
        iyr: true,
        eyr: true,
        hgt: true,
        hcl: true,
        ecl: true,
        cid: true,
        // 'pid' missing
      }

      assert.strictEqual(validatePassportMap(passport), false)
    })
  })
})
