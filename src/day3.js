const hitTree = (cell) => cell === '#'
const startingPoint = [0, 0]

const Y = 0
const X = 1

const createCellMap = (lines) => lines.map(line => line.split(''))

const sumHitTrees = (map, move) => {
  const cellMap = createCellMap(map)
  const mapHeight = cellMap.length
  const mapWidth = cellMap[0].length

  let treesHit = 0
  const pos = [...startingPoint]
  for (let y = 0; y < mapHeight; y += move[Y]) {
    pos[Y] = y
    const x = pos[X] % mapWidth

    if (hitTree(cellMap[pos[Y]][x])) treesHit += 1
    pos[X] = pos[X] + move[X]
  }
  return treesHit
}

const multiplyHitTrees = (map, vectors) => {
  return vectors.reduce((multiply, vector) => {
    if (multiply === 0) return sumHitTrees(map, vector)
    return multiply * sumHitTrees(map, vector)
  }, 0)
}

module.exports = {
  sumHitTrees,
  multiplyHitTrees,
}
