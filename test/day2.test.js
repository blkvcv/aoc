const assert = require('assert')

const { INPUT } = require('../input/day2')
const { validatePasswordsBySum, validatePasswordsByPos } = require('../src/day2')

describe('day2.js', function () {
  describe('validate passwords by sum', function () {
    it('should return 1, password has less chars than valid number', function () {
      const passwords = [
        '2-3 a: a',
        '1-2 a: aa',
      ]
      const correct = validatePasswordsBySum(passwords)
      assert.strictEqual(correct, 1)
    })
    it('should return 1, password has more chars than valid number', function () {
      const passwords = [
        '1-2 a: aaa',
        '1-2 a: aa',
      ]
      const correct = validatePasswordsBySum(passwords)
      assert.strictEqual(correct, 1)
    })
    it('should return 1 in edge case', function () {
      const passwords = [
        '1-2 a: aaa',
        '2-2 a: aa',
      ]
      const correct = validatePasswordsBySum(passwords)
      assert.strictEqual(correct, 1)
    })
    it('should return 0', function () {
      const passwords = [
        '1-2 b: aaa',
      ]
      const correct = validatePasswordsBySum(passwords)
      assert.strictEqual(correct, 0)
    })
    it('should solve the puzzle', function () {
      const correct = validatePasswordsBySum(INPUT)
      assert.strictEqual(correct, 591)
    })
  })

  describe('validate passwords by position', function () {
    it('should return 1, char is on correct first position', function () {
      const passwords = [
        '1-2 a: abcd',
      ]
      const correct = validatePasswordsByPos(passwords)
      assert.strictEqual(correct, 1)
    })
    it('should return 1, char is on correct second position', function () {
      const passwords = [
        '1-2 a: bacd',
      ]
      const correct = validatePasswordsByPos(passwords)
      assert.strictEqual(correct, 1)
    })
    it('should return 0, char is not on correct position', function () {
      const passwords = [
        '1-2 a: bcad',
      ]
      const correct = validatePasswordsByPos(passwords)
      assert.strictEqual(correct, 0)
    })
    it('should solve the puzzle', function () {
      const correct = validatePasswordsByPos(INPUT)
      assert.strictEqual(correct, 335)
    })
  })

})
