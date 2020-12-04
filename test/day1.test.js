const assert = require('assert')

const { INPUT } = require('../input/day1')
const { findSumOfThree, findSumOfTwo } = require('../src/day1')

describe('day1.js', function () {
  describe('find sum of two', function () {
    it('should return two values that summed up equal to 2', function () {
      const input = [1, 1]
      const sum = 2
      const [a, b] = findSumOfTwo(input, sum)
      assert.strictEqual(a + b, sum)
    })
    it('should return two values that summed up equal to 10', function () {
      const input = [1, 5, 5]
      const sum = 10
      const [a, b] = findSumOfTwo(input, sum)
      assert.strictEqual(a + b, sum)
    })
    it('should solve the puzzle', function () {
      const sum = 2020
      const [a, b] = findSumOfTwo(INPUT, sum)
      assert.strictEqual(a + b, sum)
      assert.strictEqual(a * b, 1014171)
    })
  })

  describe('find sum of three', function () {
    it('should return three values that summed up equal to 9', function () {
      const input = [3, 3, 3]
      const sum = 9
      const [a, b, c] = findSumOfThree(input, sum)
      assert.strictEqual(a + b + c, sum)
    })
    it('should return three values that summed up equal to 10', function () {
      const input = [1, 1, 1, 2, 4, 5]
      const sum = 10
      const [a, b, c] = findSumOfThree(input, sum)
      assert.strictEqual(a + b + c, sum)
    })
    it('should solve the puzzle', function () {
      const sum = 2020
      const [a, b, c] = findSumOfThree(INPUT, sum)
      assert.strictEqual(a + b + c, sum)
      assert.strictEqual(a * b * c, 46584630)
    })
  })
})
