const assert = require('assert')

const { INPUT, TEST } = require('../input/day3')
const { sumHitTrees, multiplyHitTrees } = require('../src/day3')

describe('day3.js', function () {
  describe('sum of hit trees with given movement vector', function () {
    it('should hit 1 tree when moving diagonally', function () {
      const input = [
        '..#',
        '.#.',
        '#..',
      ]
      const moveVector = [1, 1]
      const hitTrees = sumHitTrees(input, moveVector)
      assert.strictEqual(hitTrees,1)
    })
    it('should hit 2 trees when side step increased', function () {
      const input = [
        '...#...',
        '..#..#.', // [1,2]
        '.#..#..', // [2,4]
        '#..#...',
      ]
      const moveVector = [1, 2]
      const hitTrees = sumHitTrees(input, moveVector)
      assert.strictEqual(hitTrees,2)
    })
    it('should hit 1 tree when down step increased', function () {
      const input = [
        '..#',
        '.#.',
        '#..', // [2,1]
        '..#',
      ]
      const moveVector = [2, 0]
      const hitTrees = sumHitTrees(input, moveVector)
      assert.strictEqual(hitTrees,1)
    })
    it('should extend map and hit 2 trees', function () {
      // ... ...
      // ..# ..# // [1,2]
      // .#. .#. // [2,4] ([2,1])
      const input = [
        '...',
        '..#',
        '.#.',
      ]
      const moveVector = [1, 2]
      const hitTrees = sumHitTrees(input, moveVector)
      assert.strictEqual(hitTrees,2)
    })
    it('should match puzzle test', function () {
      const moveVector = [1, 3]
      const hitTrees = sumHitTrees(TEST, moveVector)
      assert.strictEqual(hitTrees, 7)
    })
    it('should solve the puzzle', function () {
      const moveVector = [1, 3]
      const hitTrees = sumHitTrees(INPUT, moveVector)
      assert.strictEqual(hitTrees, 276)
    })
  })
  describe('multiply of hit trees with multiple movement vectors', function () {
    it('should match puzzle test', function () {
      const moveVectors = [
        [1, 1],
        [1, 3],
        [1, 5],
        [1, 7],
        [2, 1],
      ]
      const hitTreesMultiply = multiplyHitTrees(TEST, moveVectors)
      assert.strictEqual(hitTreesMultiply, 336)
    })
    it('should solve the puzzle', function () {
      const moveVectors = [
        [1, 1],
        [1, 3],
        [1, 5],
        [1, 7],
        [2, 1],
      ]
      const hitTreesMultiply = multiplyHitTrees(INPUT, moveVectors)
      assert.strictEqual(hitTreesMultiply, 7812180000)
    })
  })
})
